const db = require('../PostgreSQL')

class GameService {
    async getAll() {
        return await db.query('SELECT * FROM game');
    }
    async getAllWithLimit(min,max) {
        return await db.query(`SELECT * FROM game WHERE id > $1 and id <= $2`, [min,max]);
    }
    async getAllByGenre(genre) {
        return await db.query(`SELECT * FROM game WHERE genre = $1`, [genre])
    }
    async getAllByGenreWithLimit(min,max, genre) {
        return await db.query(`SELECT * FROM game WHERE genre = $1 and genre_id > $2 and genre_id <= $3`,
            [
                genre,
                min,
                max
            ])
    }
    async getAllByPlatform(platform) {
        return await db.query(`SELECT * FROM game WHERE platform = $1`, [platform]);
    }
    async getAllByPlatformWithLimit(min,max, platform) {
        return await db.query(`SELECT * FROM game WHERE platform = $1 and id > $2 and id <= $3`,
            [
                platform,
                min,
                max
            ]);
    }

    async getById(id) {
        return await db.query(`SELECT * FROM game WHERE id = $1`, [id])
    }

    async create(game) {
        return await db.query(`INSERT INTO game(name, description) VALUES ($1, $2)`, [game.name, game.description])
    }

    async update(id,post) {
        return await db.query(`UPDATE game 
            name = $1
            WHERE id = $2`,
            [
            post.name,
            id
        ])
    }

    async delete(id) {
        return await db.query(`DELETE FROM game WHERE id = $1`, [id])
    }
    async deleteAll() {
        return await db.query('DELETE FROM game')
    }
}

module.exports = new GameService();