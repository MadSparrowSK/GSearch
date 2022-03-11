const Post = require('./PostSchema')

module.exports = postCount = async (type) => {
    const count = await Post.countDocuments(type);
    return count;
}