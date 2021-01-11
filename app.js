const express = require('express');
const mongoose = require('mongoose');
//use dotenv to store secret keys
require('dotenv/config')
const app = express();

//middleware
// app.use('/posts', () => {
//   console.log('This is a middleware running');
// })

function requireAdmin(req, res, next) {
  console.log('middleware tings')
  next();
}


//ROUTES
app.get('/', (req,res) => {
  res.send('we are on home')
})

app.get('/posts', requireAdmin, (req,res) => {
  res.send('we are on posts')
})

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('connected to DB!')
})



//How do we start listening to the server
app.listen(3001);
