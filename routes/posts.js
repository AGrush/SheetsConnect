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
    description: req.body.en1,
    description: req.body.en2,
    description: req.body.en3,
    description: req.body.en4,
    description: req.body.fr1,
    description: req.body.fr2,
    description: req.body.fr3,
    description: req.body.fr4,
    description: req.body.de1,
    description: req.body.de2,
    description: req.body.de3,
    description: req.body.de4,
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
    const updatedPost = await Post.updateOne(
      { _id:req.params.postId }, 
      { $set: {title: req.body.title } }
    )
    res.json(updatedPost)
  }catch(err){
    res.json({ message: err })
  }
})

module.exports = router;