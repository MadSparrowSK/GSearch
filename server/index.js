const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')

const gameRouter = require('./Routers/game-router');
const postsRouter = require('./Routers/posts-router');
const adminRouter = require('./Routers/admin-router');

const PORT = 5000;
const DB_URL = 'mongodb+srv://admin:CGa672WYK3BWL5uh@cluster0.naiih.mongodb.net/GSearch?retryWrites=true&w=majority'

const app = express();

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use(cors())
app.use('/game-api', gameRouter);
app.use('/posts-api', postsRouter);
app.use(adminRouter);


const start = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('successfully connected to db')
        app.listen(PORT, () => console.log(`Server is running on ${PORT} port`))
    } catch (e) {
        console.log(e)
    }
}

start();
