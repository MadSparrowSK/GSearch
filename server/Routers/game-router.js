const {Router} = require('express')
const GameController = require('../PostgreSql/Controller/GameController')

const gameRouter = new Router();

gameRouter.get('/games', GameController.getAllGames)
gameRouter.get('/games/genres/:genre', GameController.getGamesByGenre)
gameRouter.get('/games/:id', GameController.getGameById)

gameRouter.post('/games', GameController.createGame);

gameRouter.put('/games', GameController.updateGameById)

gameRouter.delete('/games', GameController.deleteGameById)
gameRouter.delete('/games/all', GameController._deleteAllGames)

module.exports = gameRouter;