//use dotenv to store secret keys
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


//connect to DB
mongoose.connect("mongodb+srv://grushevskiy:intercom@cluster0.9mmia.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, dbName: "cluster-rest" }).then(() => {
  console.log('MongoDB is connected')
})

mongoose.set('debug', true);

const db = mongoose.connection;

db.once('open', () => {
    console.log('connection opened')
});



//MIDDLEWARES
//cors
app.use(cors());
//decode url special characters
app.use(express.urlencoded({ extended: true }));
//parse json POSTs
app.use(express.json());





//import routes for middleware
const postsRoute = require('./routes/posts');

//midleware routes
app.use('/posts', postsRoute)

//ROUTES
app.get('/', (req,res) => {
  res.send('we are on home')
})





//How do we start listening to the server
app.listen( process.env.PORT || 3000);