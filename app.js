//use dotenv to store secret keys
const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');



//MIDDLEWARES
//decode url special characters
app.use(express.urlencoded({ extended: true }));
//parse json POSTs
app.use(express.json());
//cors
app.use(cors());

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

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('connected to DB!')
})



//How do we start listening to the server
app.listen( process.env.PORT || 3000);
