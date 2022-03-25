const db = require("../PostgreSQL")

class CreateService {
    async label(label) {
        return await db.query(`INSERT INTO game_label(label) VALUES ($1) RETURNING *`, [label])
    }

    async publisher(publisher) {
        return await db.query(`INSERT INTO game_publisher(pub_name) VALUES ($1) RETURNING *`,[publisher])
    }

    async developer(developer) {
        return await db.query(`INSERT INTO game_developer(dev_name) VALUES ($1) RETURNING *`, [developer]);
    }
}

module.exports = new CreateService()