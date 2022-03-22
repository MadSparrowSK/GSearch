const express = require('express');
const fileUpload = require('express-fileupload')

const gameRouter = require('./Routers/game-router');
const postsRouter = require('./Routers/posts-router');
const adminRouter = require('./Routers/admin-router');

const PORT = 5000;

const app = express();

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use((req,res,next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Expose-Headers': '*',
        'Cache-Control': 'no-cache'
    })
    next();
})

app.use('/games-api', gameRouter);
app.use('/posts-api', postsRouter);
app.use(adminRouter);

app.get('*', (req,res) => {
    res.status(400).json({message:"ERROR 400 BAD REQUEST"})
})


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server is running on ${PORT} port`))
    } catch (e) {
        console.log(e)
    }
}

start();
