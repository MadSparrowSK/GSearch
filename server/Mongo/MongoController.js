const events = require('events')
const FileService = require('../File/FileService')
const MongoService = require('./MongoService')

const makeSlug = require('../String/slug')

class MongoController {
    constructor() {
        this.emitter = new events.EventEmitter();
    }

    async getAllPosts(req, res) {
        try {
            const posts = await MongoService.find();
            res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getPostById(req,res) {
        try {
            const {id} = req.params;
            const post = await MongoService.findById(id);
            res.status(200).json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getPostsByType(req,res) {
        const {type} = req.params;
        const posts = await MongoService.findByType(type);
        res.status(200).json(posts)
    }
    async getPostByName(req, res) {
        res.status(200).send('find')
    }
    async getHotPosts(req,res) {
        res.status(200);
        res.set({
            'Connection':'keep-alive',
            'Content-Type': 'text/event-stream; charset=utf-8',
            'Cache-Control': 'no-cache'
        })
        this.emitter.on('hotPosts', (post) => {
            res.write(`data: ${JSON.stringify(post)} \n\n`);
        })
    }
    async createPost(req, res) {
       try {
           const {author, title, description, isHotPost, content, sub_title, type} = req.body;
           const title_slug = makeSlug(title);
           const fileName = await FileService.uploadImage(req.files, title_slug);
           const date = new Date().toLocaleDateString();
           const post = await MongoService.create({author, title, description, image: fileName, title_slug, content, sub_title, type, date});
           if(isHotPost)
                this.emitter.emit('hotPosts', post);
           res.status(200).json(post);
       } catch (e) {
           res.status(500).json(e)
       }
    }
    async putPost(req,res) {
        try {
            const {id} = req.params;
            const {author, title, description, content, sub_title, type} = req.body;
            const title_slug = makeSlug(title);
            let fileName = "";
            const date = new Date().toLocaleDateString();
            if(req.files) {
                   fileName = await FileService.uploadImage(req.files, title_slug)
            }
            const post = await MongoService.put(id, {author, title, title_slug, description, content, image: fileName, sub_title, type, date});
            res.status(200).json(post);
        } catch (e) {
            res.status(404).json(e)
        }
    }
    async deletePost(req,res) {
        try {
            const {id} = req.params;
            await MongoService.delete(id);
            res.status(200).json({message:`Post with id ${id} was deleted`});
        } catch (e) {
            res.status(404).json(e)
        }
    }
}

module.exports = new MongoController();

