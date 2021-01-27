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

  let en1u = req.body.en1;
  let en2u = req.body.en2;
  let en3u = req.body.en3;
  let en4u = req.body.en4;
  let en5u = req.body.en5;
  let fr1u = req.body.fr1;
  let fr2u = req.body.fr2;
  let fr3u = req.body.fr3;
  let fr4u = req.body.fr4;
  let fr5u = req.body.fr5;
  let de1u = req.body.de1;
  let de2u = req.body.de2;
  let de3u = req.body.de3;
  let de4u = req.body.de4;
  let de5u = req.body.de5;

  let en1m;
  let en2m;
  let en3m;
  let en4m;
  let en5m;
  let fr1m;
  let fr2m;
  let fr3m;
  let fr4m;
  let fr5m;
  let de1m;
  let de2m;
  let de3m;
  let de4m;
  let de5m;

  if(typeof en1u !== 'undefined' && en1u){
    en1m = minify(en1u,options);
  }
  if(typeof en2u !== 'undefined' && en2u){
    en2m = minify(en2u,options);
  }
  if(typeof en3u !== 'undefined' && en3u){
    en3m = minify(en3u,options);
  }
  if(typeof en4u !== 'undefined' && en4u){
    en4m = minify(en4u,options);
  }
  if(typeof en5u !== 'undefined' && en5u){
    en5m = minify(en5u,options);
  }

  if(typeof fr1u !== 'undefined' && fr1u){
    fr1m = minify(fr1u,options);
  }
  if(typeof fr2u !== 'undefined' && fr2u){
    fr2m = minify(fr2u,options);
  }
  if(typeof fr3u !== 'undefined' && fr3u){
    fr3m = minify(fr3u,options);
  }
  if(typeof fr4u !== 'undefined' && fr4u){
    fr4m = minify(fr4u,options);
  }
  if(typeof fr5u !== 'undefined' && fr5u){
    fr5m = minify(fr5u,options);
  }

  if(typeof de1u !== 'undefined' && de1u){
    de1m = minify(de1u,options);
  }
  if(typeof de2u !== 'undefined' && de2u){
    de2m = minify(de2u,options);
  }
  if(typeof de3u !== 'undefined' && de3u){
    de3m = minify(de3u,options);
  }
  if(typeof de4u !== 'undefined' && de4u){
    de4m = minify(de4u,options);
  }
  if(typeof de5u !== 'undefined' && de5u){
    de5m = minify(de5u,options);
  }


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

    const updatedBody = {};
    for(let i in req.body) {
      if(req.body.hasOwnProperty(i) && i.match(/^(en|fr|de)[1-5]$/)){
        updatedBody[i] = minify(req.body[i],options);
      } 
    }

    const updatedPost = await Post.updateOne(
      //{ _id:req.params.postId }, 
      { title:req.params.postId }, 
      { $set: updatedBody }
    )

    res.json(updatedPost)
  }catch(err){
    res.json({ message: err })
  }
})

module.exports = router;