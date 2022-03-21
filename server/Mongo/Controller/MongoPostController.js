const MongoPostService = require('../Service/MongoPostService')

class MongoPostController {
    async getAllPosts(req, res) {
        try {
            const {_limit, _page} = req.query;
            if(!_limit || !_page) {
                const posts = await MongoPostService.getPartPosts();
                res.status(200);
                res.json({
                    message: 'Enjoy :)',
                    posts
                })
                res.end()
            } else {
                res.status(200).json('ok')
            }
        } catch (e) {
            console.log(e.message);
            res.status(500).json({
                message: "Server side error :("
            })
        }
    }
    getPostById(req, res) {

    }
    getPostsByType(req, res) {

    }

    async createPost(req,res) {
        try {
            const post = req.query;
            const date = Date.now().toString()

            const response = await MongoPostService.createPost({ ...post, date })
            res.status(200).json({
                message: 'ok'
            })
        } catch (e) {
            console.log(e.message);
            res.status(500).json({
                message: 'Server side error :('
            })
        }
    }

    updatePostById(req, res) {

    }

    deletePostById(req,res) {

    }
    _deleteAllPosts(req, res) {

    }
}

module.exports = new MongoPostController();