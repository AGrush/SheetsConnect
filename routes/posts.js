const express = require ('express')
const router = express.Router();
const Post = require('../models/Post')

//GETS BACK ALL THE POSTS
//find is a mongoose method
router.get('/', async (req, res) => {
  try{
    const posts = await Post.find();
    console.log(posts)
    res.json(posts);
  }catch(err){
    res.json({message: err})
  }
  
})


// old way of doing it
// router.post('/', (req,res) => {
//   //console.log(req.body);
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description
//   });

//   console.log(post)

//   post.save()
//   .then( data => {
//     console.log(data)
//     res.json(data)
//     console.log(data)
//   })
//   .catch(err => {
//     res.json({message: err})
//   })
// })

//SUBMITS A POST
router.post('/', async (req,res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  console.log(post)

  try {
    const savedPost = await post.save();
    res.json(savedPost);
    console.log(savedPost)
  } catch (err) {
    res.json({ error: "there's an error", message: JSON.stringify(err) })
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