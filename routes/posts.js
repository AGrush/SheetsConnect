const express = require ('express')
const router = express.Router();
const Post = require('../models/Post')

//find is a mongoose method
router.get('/', async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }catch(err){
    res.json({message: err})
  }
  
})

router.get('/specific', (req, res) => {
  res.send('We are on posts/specific');
})

//// old way of doing it
// router.post('/', (req,res) => {
//   //console.log(req.body);
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description
//   });

//   post.save()
//   .then( data => {
//     res.json(data)
//   })
//   .catch(err => {
//     res.json({message: err})
//   })
// })

router.post('/', async (req,res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err })
  }
})


module.exports = router;