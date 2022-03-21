const {Router} = require('express')
const MongoGameController = require('../Mongo/Controller/MongoGameController')

const gameRouter = new Router();

gameRouter.get('/games', MongoGameController.getAllGames)
gameRouter.get('/games/:id', MongoGameController.getGameById)
/*gameRouter.get('/games/:id', (req,res) => {
    res.status(400).json({message:"Error 400 BAD REQUEST"});
})*/

module.exports = gameRouter;