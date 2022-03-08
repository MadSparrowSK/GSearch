const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')

const router = require('./router');

const PORT = 5000;
const DB_URL = 'mongodb+srv://admin:CGa672WYK3BWL5uh@cluster0.naiih.mongodb.net/GSearch?retryWrites=true&w=majority'

const app = express();

app.use(express.json())
app.use(fileUpload({}))
app.use(cors())
app.use('/api', router);

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
