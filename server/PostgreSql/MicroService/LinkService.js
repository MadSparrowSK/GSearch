const db = require('../PostgreSQL')

class LinkService {
    async pubLink(game_id, pub_id) {
        await db.query(`INSERT INTO game_pub_binder(game_id, game_pub_id)
        VALUES ($1, $2)`, [game_id, pub_id])
    }

    async devLink(game_id, dev_id) {
        await db.query(`INSERT INTO game_dev_binder(game_id, game_dev_id) 
        VALUES ($1, $2)`, [game_id, dev_id])
    }

    async labelLink(game_id, label_id) {
        await db.query(`INSERT INTO game_label_binder(game_id, label_id) 
        VALUES ($1, $2)`, [game_id, label_id])
    }

    async tagLink(game_id, tag_id) {
        await db.query(`INSERT INTO game_tag_binder(game_id, tag_id) 
        VALUES ($1, $2)`, [game_id, tag_id])
    }

    async genreLink(game_id, genre_id) {
        await db.query(`INSERT INTO game_genre_binder(game_id, genre_id) 
        VALUES ($1, $2)`, [game_id, genre_id]);
    }

    async platformLink(gameId, platformId) {
        return await db.query(`INSERT INTO game_platform_binder(game_id, platform_id) 
        VALUES ($1 , $2)`,
            [gameId, platformId])
    }
}

module.exports = new LinkService();