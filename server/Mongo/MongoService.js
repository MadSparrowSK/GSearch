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
    async findByType(type) {
        const post = await Post.find({type});
        return post;
    }
    async findByName(name) {
        return {}
    }
    async create(post) {
        if(await this._checkForPost({sub_title: post.sub_title})) {
            return { message: `Post with sub-title '${post.sub_title}' already exist` }
        }
        const newPost = await Post.create(post);
        return newPost;
    }
    async put(id,post) {
        if(await this._checkForPost({sub_title: post.sub_title})) {
            return { message: `Post with sub-title '${post.sub_title}' already exist` }
        }
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

    async _checkForPost(obj) {
        const test = await Post.find(obj);
        return test.length;
    }
}

module.exports = new MongoService()