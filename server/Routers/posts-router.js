const {Router} = require('express')
const MongoPostController= require('../Mongo/Controller/MongoPostController')

const postsRouter = new Router();

postsRouter.get('/posts', MongoPostController.getAllPosts)
postsRouter.get('/posts/:type', MongoPostController.getPostsByType);
postsRouter.get('/posts/:id', MongoPostController.getPostById)

//postsRouter.get('/hot-posts', MongoPostController.getHotPosts)

postsRouter.post('/posts', MongoPostController.createPost)

postsRouter.put('/posts/:id', MongoPostController.updatePostById);

postsRouter.delete('/posts/:id', MongoPostController.deletePostById)

postsRouter.get('/delete', MongoPostController._deleteAllPosts)

postsRouter.get('/posts/:id/*', (req,res) => {
    res.status(400).json({ message: "ERROR 400 BAD REQUEST" })
})

module.exports = postsRouter;