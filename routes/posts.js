const express = require ('express')
const router = express.Router();
const Post = require('../models/Post')
var minify = require('html-minifier').minify;

//GETS BACK ALL THE POSTS
//find is a mongoose method
router.get('/', async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }catch(err){
    res.json({message: err})
  }
  
})

//SUBMITS A POST
router.post('/', async (req,res) => {

  const options = {
    collapseWhitespace: true
  }
  const en1m = minify(req.body.en1,options);
  const en2m = minify(req.body.en2,options);
  const en3m = minify(req.body.en3,options);
  const en4m = minify(req.body.en4,options);
  const en5m = minify(req.body.en5,options);
  const fr1m = minify(req.body.fr1,options);
  const fr2m = minify(req.body.fr2,options);
  const fr3m = minify(req.body.fr3,options);
  const fr4m = minify(req.body.fr4,options);
  const fr5m = minify(req.body.fr5,options);
  const de1m = minify(req.body.de1,options);
  const de2m = minify(req.body.de2,options);
  const de3m = minify(req.body.de3,options);
  const de4m = minify(req.body.de4,options);
  const de5m = minify(req.body.de5,options);

  const post = new Post({
    title: req.body.title,
    en1: en1m,
    en2: en2m,
    en3: en3m,
    en4: en4m,
    en5: en5m,
    fr1: fr1m,
    fr2: fr2m,
    fr3: fr3m,
    fr4: fr4m,
    fr5: fr5m,
    de1: de1m,
    de2: de2m,
    de3: de3m,
    de4: de4m,
    de5: de5m
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err })
  }
})

//SPECIFIC POST
router.get('/:postId', async (req,res) => {
  //console.log(req.params.postId);
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  }catch(err){
    res.json({ message: err })
  }
})

//DELETE POST
router.delete('/:postId', async (req,res) => {
  try {
    const removedPost = await Post.remove({_id:req.params.postId})
    res.json(removedPost)
  }catch(err){
    res.json({ message: err })
  }
})

//UPDATE A POST
router.patch('/:postId', async (req,res) => {
  try {

    const updatedObj = {};
    for(let i in req.body) {
        if(req.body.hasOwnProperty(i) && i.match(/^(title|(en|fr|de)[1-5])$/)) updatedObj[i] = req.body[i];
    }

    const updatedPost = await Post.updateOne(
      //{ _id:req.params.postId }, 
      { title:req.params.postId }, 
      { $set: updatedObj }
    )

    res.json(updatedPost)
  }catch(err){
    res.json({ message: err })
  }
})

module.exports = router;