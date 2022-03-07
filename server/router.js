const {Router} = require('express')
const RAWG = require('./RAWG/RAWG')
const Mongo = require('./Mongo/Mongo')

const router = new Router();

router.get('/games', RAWG.getAllGames)
router.get('/games/:id', RAWG.getGameById)


router.get('/posts', Mongo.getAllPosts)
router.get('/hot-posts', Mongo.gteHotPosts)
router.post('/posts', Mongo.createPost)

router.post('/admin', (req,res) => {
    res.send('there must be verification')
})

module.exports = router;