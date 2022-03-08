const events = require('events')

class MongoController {
    constructor() {
        this.emitter = new events.EventEmitter();
    }

    async getAllPosts(req, res) {
        res.send('there must be posts')
    }
    async getHotPosts(req,res) {
       /* this.emitter.on('hotPosts', (post) => {
            res.send(JSON.stringify({message:"Hello"}))
        })*/
    }
    async createPost(req, res) {
        const post = req.body;
        //this.emitter.emit('hotPosts', post);
        res.status(200).end();
    }
}

module.exports = new MongoController();
