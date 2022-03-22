const db = require('../PostgreSQL')

class PostService {
    async getAll() {
        return await db.query('select * from post');
    }
    async getAllByLimit(min, max)  {
        return await db.query(`select * from post where id > $1 and id < $2`, [min, max]);
    }
    async getAllByType(type) {
        console.log(type)
        return await db.query(`select * from post where type = $1`, [type])
    }
    async getAllByTypeNLimit(min,max, type) {
        return await db.query(`select * from post where type = $1 and id > $2 and id < $3`,
            [
                type,
                min,
                max
            ])
    }
    async getById(id) {
        return await db.query(`select * from post where id = $1`, [id])
    }


    async create(post) {
        return await db.query(`INSERT INTO post(author, title, description, content, image, type, type_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [
                post.author,
                post.title,
                post.description,
                post.content,
                post.image,
                post.type,
                post.type_id
            ]);
    }

    async update(newPost, id) {
        return await db.query(`
        UPDATE post SET
            author = $1,
            title = $2,
            description = $3,
            content = $4,
            image = $5
        WHERE id = $6 RETURNING *
        `,[
            newPost.author,
            newPost.title,
            newPost.description,
            newPost.content,
            newPost.image,
            id
        ]);
    }

    async delete(id) {
        return await db.query(`DELETE FROM post WHERE id = $1 RETURNING *`, [id]);
    }
    async deleteAll() {

    }
}

module.exports = new PostService();