const Post = require('./PostSchema')

class MongoService {
    async find() {
        return Post.find();
    }
    async findByPage(limit = 10, page = 1) {
        if(page < 1) throw new Error('Page cannot be lower than 1');

        const min = page * limit - limit;
        const max = page * limit + 1;

        return Post.find({numberGlobal: {$gt:min, $lt: max}}).limit(limit);
    }
    async findById(id) {
        if(!id) {
            throw new Error("Id not found")
        }
        return Post.find({_id: id});
    }
    async findByType(type) {
        return Post.find({type});
    }
    async findByTypePage(type, limit, page) {
        if(page < 1) throw new Error('Page cannot be lower than 1');

        const min = page * limit - limit;
        const max = page * limit - 1;

        return Post.find({numberByType: {$gt:min, $lt:max} }).limit(limit);
    }
    async findByName(name) {
        return {}
    }
    async create(post) {
        if(await this._checkForPost({sub_title: post.sub_title})) {
            return { message: `Post with sub-title '${post.sub_title}' already exist` }
        }
        return Post.create(post);
    }
    async put(id,post) {
        if(await this._checkForPost({sub_title: post.sub_title})) {
            return { message: `Post with sub-title '${post.sub_title}' already exist` }
        }
        return Post.findByIdAndUpdate({_id: id}, post);
    }
    async delete(id) {
        if(!id) {
            throw new Error('id not defined')
        }
        return Post.findByIdAndRemove({_id: id});
    }
    async _deleteAll() {
        await Post.deleteMany({});
    }

    async _checkForPost(obj) {
        const test = await Post.find(obj);
        return test.length;
    }
}

module.exports = new MongoService()