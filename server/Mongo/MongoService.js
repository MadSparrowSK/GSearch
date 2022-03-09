const Post = require('./PostSchema')

class MongoService {
    async find() {
        return Post.find();
    }
    async findById(id) {
        if(!id) {
            throw new Error("Id not found")
        }
        const post = await Post.find({_id:id})
        return post;
    }
    async create(post) {
        const newPost = await Post.create(post);
        return newPost;
    }
    async put(id,post) {
        const uPost = await Post.findByIdAndUpdate({_id:id}, post)
        return uPost;
    }
    async delete(id) {
        if(!id) {
            throw new Error('id not defined')
        }
        const deletePost = await Post.findByIdAndRemove({_id:id})
        return deletePost;
    }
}

module.exports = new MongoService()