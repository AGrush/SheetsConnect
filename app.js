//use dotenv to store secret keys
// require('dotenv').config();
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



//import routes for middleware
const postsRoute = require('./routes/posts');

//midleware routes
app.use('/posts', postsRoute)


//ROUTES
app.get('/', (req,res) => {
  res.send('we are on home')
})

//connect to DB
mongoose.connect("mongodb+srv://grushevskiy:intercom@cluster0.9mmia.mongodb.net/testt?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('connected to DB!')
})

const db = mongoose.connection;

db.once('open', () => {
    console.log('connection opened')
});


//How do we start listening to the server
app.listen(process.env.PORT || 3000);

//