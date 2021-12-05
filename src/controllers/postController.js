const fs = require('fs');

// Get all posts from file
const posts = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/posts.json`)
);

// Check if the post exists with requested id
exports.checkPost = (req, res, next) => {
    const post = posts.find(post => post.id === Number(req.params.id));
    if(!post) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    req.post = post;
    next();
}
// Get all posts
exports.getAllPosts = (req, res) => {
    const queryUserId = req.query.userId;
    if(queryUserId) {
        const postsWithUserId = posts.filter(post => post.userId === Number(queryUserId));
        if(postsWithUserId.length != 0) {
            res.status(200).json({
                status: 'success',
                results: postsWithUserId.length,
                data: {
                    posts: postsWithUserId
                }
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'Invalid ID'
            })
        }
    } else {
        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: {
                posts
            }
        });
    }
}
// Get a post by id
exports.getOnePost = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            post: req.post
        }
    });
}
// Create new post
exports.createPost = (req, res) => {
    const newId = posts[posts.length - 1].id + 1;
    const newPost = { id: newId, ...req.body };
    posts.push(newPost);
    fs.writeFile(`${__dirname}/../data/posts.json`, JSON.stringify(posts), err => {
        if(!err) {
            res.status(201).json({
                status: 'success',
                data: {
                    post: newPost
                }
            });
        }
    })
}
// Update post using put method
exports.updatePostWithPut = (req, res, next) => {
    const index = posts.indexOf(req.post);
    const updatedPost = { id: Number(req.post.id), ...req.body };
    posts[index] = updatedPost;
    req.updatedPost = updatedPost;
    next();
}
// Update post using patch method
exports.updatePostWithPatch = (req, res, next) => {
    const index = posts.indexOf(req.post);
    const requestedProperties = Object.keys(req.body);
    const postProperties = Object.keys(req.post);
    const updatedPost = {}
    postProperties.forEach(postProp => {
        if(postProp === 'id') 
            updatedPost['id'] = Number(req.post.id);
        else if(requestedProperties.includes(postProp)) {
            updatedPost[postProp] = req.body[postProp];
        } else {
            updatedPost[postProp] = req.post[postProp];
        }
    })
    posts[index] = updatedPost;
    req.updatedPost = updatedPost;
    next();
}
// Delete post
exports.deletePost = (req, res) => {
    const index = posts.indexOf(req.post);
    posts.splice(index, 1);
    fs.writeFile(`${__dirname}/../data/posts.json`, JSON.stringify(posts), err => {
        if(!err) {
            res.status(204).json({
                status: 'success',
                data: null
            });
        }
    })
}
// Write posts array to json file after update operations
exports.writeFileAfterUpdate = (req, res) => {
    fs.writeFile(`${__dirname}/../data/posts.json`, JSON.stringify(posts), err => {
        if(!err) {
            res.status(200).json({
                status: 'success',
                data: {
                    post: req.updatedPost
                }
            });
        }
    })
}