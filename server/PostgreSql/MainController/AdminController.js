const bcrypt = require('bcrypt')
const ErrorController = require('../../Error/ErrorController')

const AdminService = require('../MainService/AdminService')

class AdminController {
    async reg(req, res) {
        try {
            const {login, password, key} = req.body;
            const admin = {};
            admin.login = login;
            admin.password = await this._generateSecret(password, 7);
            admin.key = await this._generateSecret(key, 5);

            const req_db = await AdminService.create(admin);
            const admin_res = await req_db.rows[0];
            res.status(200).json({
                message: "admin successfully registered",
                admin: admin_res
            })
        } catch (e) {
            console.log(e.message);
            ErrorController._500(req,res)
        }
    }
    async login(req, res) {
        try {
            const {login, password} = req.body;
            const req_db = await AdminService.findAdminByLogin(login);
            const admin = req_db.rows[0];

            const isCompare = await this._compareSecret(password, admin.password);
            if(isCompare) {
                res.status(200).json({
                    message:`Welcome ${admin.login}`
                })
            } else {
                res.status(403).json({
                    message: "Access denied"
                })
            }
        } catch (e) {
            console.log(e.message)
            ErrorController._500(req,res)
        }
    }

    async deleteAccount(req,res) {
        try {
            const {login, password, key} = req.query;
            const req_db = await AdminService.findAdminByLogin(login);
            const admin = req_db.rows[0];

            const isComparePassword = await this._compareSecret(password, admin.password);
            const isCompareKey = await this._compareSecret(key, admin.key);
            if(isComparePassword && isCompareKey) {
                await AdminService.deleteByLogin(admin);
                res.status(200).json({
                    message:`${admin.login} was deleted`
                })
            } else {
                res.status(403).json({
                    message: "Access denied"
                })
            }
        } catch (e) {
            console.log(e.message)
            ErrorController._500(req,res)
        }
    }

    async checkKey(key, admin) {
        const req_admin = await AdminService.findAdminByLogin(admin);
        const admin_db = await req_admin.rows[0];
        return admin_db && bcrypt.compareSync(key, admin_db.key);
    }

    async _generateSecret(key, salt) {
        return await bcrypt.hashSync(key, salt)
    }
    async _compareSecret(data, hash) {
        return await bcrypt.compareSync(data, hash);
    }
}

module.exports = new AdminController()