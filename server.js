const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const items = require('./routes/api/items');


const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//Mongo connect
mongoose
    .connect(db)
    .then(() => {
        console.log('Mongo connected...')
        })
    .catch(err => console.log(err));


//User routes
app.use('/api/items', items);

//Defining ports
const port = process.env.port || 5000;

app.listen(port, () => {
    console.log('Server started on port: '+port)
});