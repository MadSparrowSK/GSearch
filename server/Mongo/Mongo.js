const events = require('events')

const emitter = new events.EventEmitter();

class Mongo {
    constructor() {
    }

    getAllPosts(req, res) {
        res.send('there must be posts')
    }
    gteHotPosts(req,res) {
        emitter.on('hotPosts', (post) => {
            res.send(JSON.stringify({message:"Hello"}))
        })
    }
    createPost(req, res) {
        const post = req.body;
        emitter.emit('hotPosts', post);
        res.status(200).end();
    }
}

module.exports = new Mongo();