const express = require ('express')
const router = express.Router();
const Post = require('../models/Post')

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
  const post = new Post({
    title: req.body.title,
    en1: req.body.en1,
    en2: req.body.en2,
    en3: req.body.en3,
    en4: req.body.en4,
    en5: req.body.en5,
    fr1: req.body.fr1,
    fr2: req.body.fr2,
    fr3: req.body.fr3,
    fr4: req.body.fr4,
    fr5: req.body.fr5,
    de1: req.body.de1,
    de2: req.body.de2,
    de3: req.body.de3,
    de4: req.body.de4,
    de5: req.body.de5
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