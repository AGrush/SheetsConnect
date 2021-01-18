//use dotenv to store secret keys
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

//connect to DB
mongoose.connect("mongodb+srv://grushevskiy:intercom@cluster-rest.4luv0.mongodb.net/cluster-rest?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, dbName: "cluster-rest" }, () => {
  console.log('connected to DB!')
})

mongoose.set('debug', true);

const db = mongoose.connection;

db.once('open', () => {
    console.log('connection opened')
});


//import routes for middleware
const postsRoute = require('./routes/posts');

//midleware routes
app.use('/posts', postsRoute)

//ROUTES
app.get('/', (req,res) => {
  res.send('we are on home')
})


//MIDDLEWARES
//cors
app.use(cors());
//decode url special characters
app.use(express.urlencoded({ extended: true }));
//parse json POSTs
app.use(express.json());


//How do we start listening to the server
app.listen( process.env.PORT || 3000);