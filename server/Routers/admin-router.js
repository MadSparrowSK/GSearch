const {Router} = require('express')
const AdminController = require('../PostgreSql/MainController/AdminController')

const adminRouter = new Router();

AdminController.reg = AdminController.reg.bind(AdminController);
AdminController.login = AdminController.login.bind(AdminController);
AdminController.deleteAccount = AdminController.deleteAccount.bind(AdminController);

adminRouter.post('/create',AdminController.reg)
adminRouter.post('/login', AdminController.login)
adminRouter.delete('/delete', AdminController.deleteAccount)

module.exports = adminRouter;