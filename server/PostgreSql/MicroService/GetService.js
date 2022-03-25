const db = require('../PostgreSQL')

class GetService {

    async publisher(pub) {
        return await db.query(`SELECT * FROM game_publisher WHERE pub_name = $1`, [pub]);
    }

    async developer(dev) {
        return await db.query(`SELECT * FROM game_developer WHERE dev_name = $1`, [dev])
    }

    async label(label) {
        return await db.query(`SELECT * FROM game_label WHERE label = $1`, [label])
    }

    async tag(tag) {
        return await db.query(`SELECT * FROM game_tag WHERE tag = $1`, [tag])
    }

    async genre(genre) {
        return await db.query(`SELECT * FROM game_genre WHERE genre = $1`, [genre])
    }

    async platform(platform) {
        return await db.query(`SELECT * FROM game_platform WHERE platform = $1`,
            [platform])
    }

    async checkGame(name) {
        return await db.query(`SELECT * FROM game WHERE name = $1`, [name])
    }
}

module.exports = new GetService();