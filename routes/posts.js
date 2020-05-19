const express  = require('express');
const router = express.Router();
const Post = require('../models/Post')


// get all post
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json({ message: err });
    }
    res.send('this is posts')
})

// router.get('/test', (req, res) => {
//     res.send('test in posts')
// })

// submit a post
router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({ message: err });
    }
   
    // post.save()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(err => {
    //     res.json({ message: err });
    // })
});

// Specific Post
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post);
    } catch(err) {
        res.json({ message: err });
    }
});

// Delet Post
router.delete('/:postId', async(req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch(err) {
        res.json({ message: err });
    }
});

// Updete Post
router.patch('/:postId', async(req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: { title: req.body.title } });
        res.json(updatedPost);
    } catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;