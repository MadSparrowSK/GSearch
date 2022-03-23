const db = require('../PostgreSQL');

class AdminService {
    async create(admin) {
        return await db.query(`INSERT INTO admin(login, password, key) VALUES ($1, $2, $3) 
        RETURNING login`,
            [
                admin.login,
                admin.password,
                admin.key
            ])
    }
    async findAdminByLogin(admin) {
        return await db.query(`SELECT * FROM admin WHERE login = $1`, [admin]);
    }
    async deleteByLogin(admin) {
        return await db.query(`DELETE FROM admin WHERE login = $1 
        RETURNING login`, [admin])
    }
}
module.exports = new AdminService();