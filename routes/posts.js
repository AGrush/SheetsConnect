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

  // const options = {
  //   collapseWhitespace: true
  // }

  const en1u = req.body.en1;
  const en2u = req.body.en2;
  const en3u = req.body.en3;
  const en4u = req.body.en4;
  const en5u = req.body.en5;
  const fr1u = req.body.fr1;
  const fr2u = req.body.fr2;
  const fr3u = req.body.fr3;
  const fr4u = req.body.fr4;
  const fr5u = req.body.fr5;
  const de1u = req.body.de1;
  const de2u = req.body.de2;
  const de3u = req.body.de3;
  const de4u = req.body.de4;
  const de5u = req.body.de5;

  const en1m = minify(en1u,options);
  const en2m = minify(en2u,options);
  const en3m = minify(en3u,options);
  const en4m = minify(en4u,options);
  const en5m = minify(en5u,options);
  const fr1m = minify(fr1u,options);
  const fr2m = minify(fr2u,options);
  const fr3m = minify(fr3u,options);
  const fr4m = minify(fr4u,options);
  const fr5m = minify(fr5u,options);
  const de1m = minify(de1u,options);
  const de2m = minify(de2u,options);
  const de3m = minify(de3u,options);
  const de4m = minify(de4u,options);
  const de5m = minify(de5u,options);

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