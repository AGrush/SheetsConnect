//use dotenv to store secret keys
require("dotenv").config();

//connect to DB
mongoose.connect("mongodb+srv://grushevskiy:intercom@cluster-rest.4luv0.mongodb.net/cluster-rest?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, dbName: "cluster-rest" }, () => {
  console.log('connected to DB!')
})


const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

mongoose.set('debug', true);

//MIDDLEWARES
//cors
app.use(cors());
//decode url special characters
app.use(express.urlencoded({ extended: true }));
//parse json POSTs
app.use(express.json());


//middleware
// app.use('/posts', () => {

//   console.log('This is a middleware running');
// })

// function requireAdmin(req, res, next) {
//   console.log('middleware tings')
//   next();
// }

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
