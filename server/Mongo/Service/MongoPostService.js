const Post = require('../Schema/PostSchema')

class MongoPostService {
    async getAll() {
        return await Post.find();
    }
    getByTypes() {

    }
    getPartPosts() {

    }
    getById() {

    }

    async createPost(post) {
        await Post.create(post)
    }

    updatePost() {

    }

    deletePost() {

    }
    _deleteAllPosts() {

    }
}

module.exports = new MongoPostService()