const {Schema, model} = require('mongoose')

const Post = new Schema({
    author: { type:String,  required:true},
    title: { type:String, required: true },
    sub_title: { type:String, required: true },
    title_slug: { type:String, required: true},
    description: {type: String, default: ""},
    content: { type:String, required:true },
    image: { type:String },
})

module.exports = model('Post', Post);