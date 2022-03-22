const db = require('../PostgreSQL')

class DbLimit {
    async limitPost() {
        return await db.query('select MAX(id) from post')
    }
    async typeLimitPost(type) {
        return  await db.query(`select MAX(type_id) from post where type = $1`, [type]);
    }
    async limitGame() {

    }
    async typeLimitGame(type) {

    }
}

module.exports = new DbLimit();