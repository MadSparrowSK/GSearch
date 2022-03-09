const {Router} = require('express')


const adminRouter = new Router();

adminRouter.get('/admin', (req, res) => {
    res.status(200).json({message: 'welcome to admin page'});
})

adminRouter.get('/admin/*', (req,res) => {
    res.status(400).json({message:"ERROR 400 BAD REQUEST"})
})

module.exports = adminRouter;