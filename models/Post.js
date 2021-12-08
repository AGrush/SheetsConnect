const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  en1: {
    type: String,
    required: false
  },
  en2: {
    type: String,
    required: false
  },
  en3: {
    type: String,
    required: false
  },
  en4: {
    type: String,
    required: false
  },
  en5: {
    type: String,
    required: false
  },
  fr1: {
    type: String,
    required: false
  },
  fr2: {
    type: String,
    required: false
  },
  fr3: {
    type: String,
    required: false
  },
  fr4: {
    type: String,
    required: false
  },
  fr5: {
    type: String,
    required: false
  },
  de1: {
    type: String,
    required: false
  },
  de2: {
    type: String,
    required: false
  },
  de3: {
    type: String,
    required: false
  },
  de4: {
    type: String,
    required: false
  },
  de5: {
    type: String,
    required: false
  },
  it1: {
    type: String,
    required: false
  },
  it2: {
    type: String,
    required: false
  },
  it3: {
    type: String,
    required: false
  },
  it4: {
    type: String,
    required: false
  },
  it5: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
})

//name of model (visible in atlas), which schema to use
module.exports = mongoose.model('Posts', PostSchema)