const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  en1: {
    type: String,
    required: true
  },
  en2: {
    type: String,
    required: true
  },
  en3: {
    type: String,
    required: true
  },
  en4: {
    type: String,
    required: true
  },
  fr1: {
    type: String,
    required: true
  },
  fr2: {
    type: String,
    required: true
  },
  fr3: {
    type: String,
    required: true
  },
  fr4: {
    type: String,
    required: true
  },
  de1: {
    type: String,
    required: true
  },
  de2: {
    type: String,
    required: true
  },
  de3: {
    type: String,
    required: true
  },
  de4: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

//name of model (visible in atlas), which schema to use
module.exports = mongoose.model('Posts', PostSchema)