const PostService = require('../Service/PostService')
const DbLimit = require('../utils/dbLimit')

const makePostObj = require('../utils/makePostObj')

class PostController {
    async getAllPosts(req, res) {
        try {
            const {_limit, _page} = req.query;
            if(_limit && _page) {
                const min = _limit * _page - _limit;
                const max = _limit * _page + 1;

                const req_lim = await DbLimit.limitPost();
                const limit = req_lim.rows[0].max;

                const req_db = await PostService.getAllByLimit(min, max);
                let posts = await req_db.rows;
                posts = posts.length ? posts : null
                res.status(200);
                res.set('x-total-count', limit)
                res.json({
                    page: _page,
                    posts
                })
            } else {
                const req_db = await PostService.getAll();
                const posts = await req_db.rows;
                res.status(200).json({
                    message: "You choose your destiny yourself",
                    posts
                })
            }
        } catch (e) {
            console.log(e.message)
            res.status(500).json(":(")
        }
    }
    async getPostsByType(req, res) {
        try {
            const {_limit, _page} = req.query;
            const { type } = req.params;
            if(_limit && _page) {
                const min = _limit * _page - _limit;
                const max = _limit * _page + 1;

                const req_db = await PostService.getAllByTypeNLimit(min,max, type)
                let posts = await req_db.rows;
                posts = posts.length ? posts : null;
                res.status(200).json({
                    page: _page,
                    posts
                })
            } else {
                const req_db = await PostService.getAllByType(type);
                const posts = await req_db.rows;
                res.status(200).json({
                    message: "You choose your destiny yourself",
                    posts
                })
            }
        } catch (e) {
            console.log(e.message)
            res.status(500).json(":(")
        }
    }
    async getPostById(req, res) {
        try {
            const { id } = req.params;
            const req_db = await PostService.getById(id);
            const post = await req_db.rows[0];
            res.status(200).json(post);
        } catch (e) {
            console.log(e.message)
            res.status(500).json(":(")
        }
    }

    async createPost(req, res) {
        try {
            const futPost = makePostObj(req.body);
            const req_db = await DbLimit.typeLimitPost(futPost.type);
            const max = await req_db.rows[0].max;
            futPost.type_id = max == null ? 1 : max + 1;
            const post = await PostService.create(futPost);

            res.status(200).json({
                message: 'Post was created',
                post: post.rows[0]
            })
        } catch (e) {
            console.log(e.message)
            res.status(500).json(":(")
        }
    }

    async updatePostById(req, res) {
        try {
            const {id} = req.params;
            const remakeObj = makePostObj(req.body);
            const update_req = await PostService.update(remakeObj, id);
            const post = await update_req.rows[0];
            res.status(200).json({
                message: 'Post was updated',
                post
            })
        } catch (e) {
            console.log(e.message);
            res.status(500).json(':(')
        }
    }

    async deletePostById(req,res) {
        try {
            const {id} = req.params;
            const del_req = await PostService.delete(id);
            const del_post = del_req.rows[0];
            res.status(200).json({
                message: "Post was deleted",
                post: del_post
            })
        } catch (e) {
            console.log(e.message)
            res.status(500).json(':(')
        }
    }
    async _deleteAllPosts(req,res) {

    }
}


module.exports = new PostController();