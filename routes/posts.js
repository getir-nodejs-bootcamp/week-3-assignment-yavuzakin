const router = require('express').Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', (req, res) => {
    res.status(200).json(Post);
})

// Get post by id
router.get('/:id', (req, res) => {
    const requestedPost = Post.find(post => post.id === Number(req.params.id));
    if(requestedPost)
        res.status(200).json(requestedPost);
    else
        res.status(404).json('Post not found');
})

// Create a post
router.post('/', (req, res) => {
    const newPost = { id: 101, ...req.body};
    res.status(200).json(newPost); 
})

// Update post with put
router.put('/:id', (req, res) => {
    const requestedPost = Post.find(post => post.id === Number(req.params.id));
    if(requestedPost) {
        if(req.body.id && req.body.title && req.body.body && req.body.userId) {
            const { id, ...others } = req.body;
            res.status(200).json({ id: req.params.id, ...others});
        } else {
            res.status(400).json('Bad request');
        }
    } else {
        res.status(404).json('Post not found');
    }
})

// Update post with patch
router.patch('/:id', (req, res) => {
    const requestedPost = Post.find(post => post.id === Number(req.params.id));
    if(requestedPost) {
        const requestedProperties = Object.keys(req.body);
        const postProperties = Object.keys(requestedPost);
        const responseJson = {}
        postProperties.forEach(postProp => {
            if(postProp === 'id') 
                responseJson['id'] = req.params.id;
            else if(requestedProperties.includes(postProp)) {
                responseJson[postProp] = req.body[postProp];
            } else {
                responseJson[postProp] = requestedPost[postProp];
            }
        })
        res.status(200).json(responseJson);
    } else {
        res.status(404).json('Post not found');
    }
})

// Delete post
router.delete('/:id', (req, res) => {
    const requestedPost = Post.find(post => post.id === Number(req.params.id));
    if(requestedPost)
        res.status(200).json('Post has been deleted successfully');
    else
        res.status(404).json('Post not found');
})

module.exports = router;