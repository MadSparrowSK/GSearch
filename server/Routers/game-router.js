const {Router} = require('express')
const RAWG_Controller = require('../RAWG/RAWG-Controller');

RAWG_Controller.getAllGames = RAWG_Controller.getAllGames.bind(RAWG_Controller);
RAWG_Controller.getGameById = RAWG_Controller.getGameById.bind(RAWG_Controller);

const gameRouter = new Router();

gameRouter.get('/games', RAWG_Controller.getAllGames)
gameRouter.get('/games/:id', RAWG_Controller.getGameById)

module.exports = gameRouter;