const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postRoutes = require('./routes/posts');


// Here is posts Middleware
app.use('/posts', postRoutes);


//Routes
// app.get('/', (req, res) => {
//     res.send('this is get')
// })

//connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() => {
    console.log('connect to DB')
});

//start listening to the server
app.listen(3000)