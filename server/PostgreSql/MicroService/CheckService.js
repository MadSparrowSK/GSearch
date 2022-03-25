const db = require('../PostgreSQL')

class CheckService {
    async game(game) {
        return await db.query(`SELECT * FROM game WHERE name = $1`, [game.name])
    }
}

module.exports = new CheckService();