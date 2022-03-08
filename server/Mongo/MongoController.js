const events = require('events')
const uuid = require('uuid')
const path = require('path')
const Post = require('./PostSchema')

class MongoController {
    constructor() {
        this.password = 'CGa672WYK3BWL5uh';
        this.emitter = new events.EventEmitter();
    }

    async getAllPosts(req, res) {
        try {
            const posts = await Post.find();
            res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getPostById(req,res) {

    }
    async getHotPosts(req,res) {
       /* this.emitter.on('hotPosts', (post) => {
            res.send(JSON.stringify({message:"Hello"}))
        })*/
    }
    async createPost(req, res) {
       try {
           const fileName = uuid.v4() + '.jpeg';
           const filePath = path.resolve('static', fileName)
           await req.files.image.mv(filePath);

           console.log(req.files)
           const {author, title, description} = req.body;
           const post = await Post.create({author, title, description, image: fileName
           })
           //this.emitter.emit('hotPosts', post);
           res.status(200).json(post);
       } catch (e) {
           res.status(500).json(e)
       }
    }
}

module.exports = new MongoController();

