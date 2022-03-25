const db = require('../PostgreSQL')

class GetService {

    async game(id) {
        return await db.query(`SELECT * FROM game WHERE id = $1`, [id])
    }

    async publisher(pub) {
        return await db.query(`SELECT * FROM game_publisher WHERE pub_name = $1`, [pub]);
    }
    async publisherById(pub_id) {
        return await db.query(`SELECT * FROM game_publisher WHERE id = $1`, [pub_id])
    }
    async publisherBinderByGameId(game_id) {
        return await db.query(`SELECT * FROM game_pub_binder WHERE game_id = $1`, [game_id])
    }


    async developer(dev) {
        return await db.query(`SELECT * FROM game_developer WHERE dev_name = $1`, [dev])
    }
    async developerById(dev_id) {
        return await db.query(`SELECT * FROM game_developer WHERE id = $1`, [dev_id])
    }
    async developerBinderByGameId(game_id) {
        return await db.query(`SELECT * FROM game_dev_binder WHERE game_id = $1`, [game_id])
    }


    async label(label) {
        return await db.query(`SELECT * FROM game_label WHERE label = $1`, [label])
    }
    async labelById(label_id) {
        return await db.query(`SELECT * FROM game_label WHERE genre = $1`, [label_id])
    }
    async labelBinderByGameId(game_id) {
        return await db.query(`SELECT * FROM game_label_binder WHERE game_id = $1`, [game_id])
    }

    async tag(tag) {
        return await db.query(`SELECT * FROM game_tag WHERE tag = $1`, [tag])
    }
    async tagById(tag_id) {
        return await db.query(`SELECT * FROM game_tag WHERE id = $1`, [tag_id])
    }
    async tagBinderByGameId(game_id) {
        return await db.query(`SELECT * FROM game_tag_binder WHERE game_id = $1`, [game_id])
    }

    async genre(genre) {
        return await db.query(`SELECT * FROM game_genre WHERE genre = $1`, [genre])
    }
    async GenreById(genre_id) {
        return await db.query(`SELECT * FROM game_genre WHERE id = $1`, [genre_id])
    }
    async genreBinderByGameId(game_id) {
        return await db.query(`SELECT * FROM game_genre_binder WHERE game_id = $1`, [game_id])
    }


    async platform(platform) {
        return await db.query(`SELECT * FROM game_platform WHERE platform = $1`,
            [platform])
    }
    async platformById(platform_id) {
        return await db.query(`SELECT * FROM game_platform WHERE id = $1`,
            [platform_id])
    }
    async platformBinderByGameId(game_id) {
        return await db.query(`SELECT * FROM game_platform_binder WHERE game_id = $1`,
            [game_id])
    }
}

module.exports = new GetService();