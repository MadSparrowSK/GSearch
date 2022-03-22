const {Router} = require('express')
const PostController = require('../PostgreSql/Controller/PostController')
const postsRouter = new Router();

postsRouter.get('/posts', PostController.getAllPosts)
postsRouter.get('/posts/id/:id', PostController.getPostById)
postsRouter.get('/posts/type/:type', PostController.getPostsByType);


postsRouter.post('/posts/create', PostController.createPost)

postsRouter.put('/posts/update/:id', PostController.updatePostById);

postsRouter.delete('/posts/delete/:id', PostController.deletePostById)
postsRouter.delete('/posts/all', PostController._deleteAllPosts)

module.exports = postsRouter;