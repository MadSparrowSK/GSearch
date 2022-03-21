const {Schema, model} = require('mongoose')

const Post = new Schema({
    author: { type:String,  required:true},
    title: { type:String, required: true },
    title_slug: { type:String, required: true},
    description: {type: String, default: ""},
    content: { type:String, required:true },
    image: { type:String },
    type: { type: String, required: true },
    date: { type: Date, required:true },
    globalId: { type: Number, required:true },
    typeId: { type: Number, required:true }
})

module.exports = model('Post', Post)