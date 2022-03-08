const {Router} = require('express')
const RAWG_Controller = require('./RAWG/RAWG-Controller')
const MongoController= require('./Mongo/MongoController')

const router = new Router();

RAWG_Controller.getAllGames = RAWG_Controller.getAllGames.bind(RAWG_Controller);
RAWG_Controller.getGameById = RAWG_Controller.getGameById.bind(RAWG_Controller);

MongoController.getAllPosts = MongoController.getAllPosts.bind(MongoController);
MongoController.getHotPosts = MongoController.getHotPosts.bind(MongoController);
MongoController.createPost = MongoController.createPost.bind(MongoController);

router.get('/games', RAWG_Controller.getAllGames)
router.get('/games/:id', RAWG_Controller.getGameById)

router.get('/posts', MongoController.getAllPosts)
router.get('/hot-posts', MongoController.getHotPosts)
router.post('/posts', MongoController.createPost)

router.post('/admin', (req,res) => {
    res.send('there must be verification')
})

module.exports = router;