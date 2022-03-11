const events = require('events')
const FileService = require('../File/FileService')
const MongoService = require('./MongoService')

const parseEntryObject = require('./parseEntryObject')
const postCount = require('./postCount')
const makeSlug = require('../String/slug')

class MongoController {
    constructor() {
        this.emitter = new events.EventEmitter();
    }

    async getAllPosts(req, res) {
        try {
            const {_limit, page} = req.query;
            const countPosts = await postCount({});
            const posts = !_limit ? await MongoService.find() : await MongoService.findByPage(_limit, page);
            res.set({'x-total-count': countPosts})
            res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e.message);
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
    async getPostsByType(req,res)
    {
        const {_limit, page} = req.params;
        const {type} = req.params;
        const countPosts = postCount({type})
        const posts = !_limit ? await MongoService.findByType(type) : await MongoService.findByTypePage(type, _limit, page);
        res.set({'x-total-count': countPosts})
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
           const postObjToCreate = parseEntryObject(req.body)
           postObjToCreate.title_slug = makeSlug(postObjToCreate.title);
           postObjToCreate.fileName = await FileService.uploadImage(req.files, postObjToCreate.title_slug);
           postObjToCreate.date = new Date().toLocaleDateString();
           postObjToCreate.numberGlobal = await postCount({}) + 1;
           postObjToCreate.numberByType = await postCount({type:postObjToCreate.type}) + 1;

           const post = await MongoService.create(postObjToCreate);
           if(postObjToCreate.isHotPost)
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
    async _deleteAllPosts() {
        await MongoService._deleteAll();
    }
}

module.exports = new MongoController();

