const express = require('express');
const cors = require('cors')
const router = require('./router');

const PORT = 5000;

const app = express();

app.use(express.json())
app.use(cors())
app.use('/api', router);

app.listen(PORT, () => console.log(`Server is running on ${PORT} port`))