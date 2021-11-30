const router = require('express').Router();
const User = require('../models/User');

// Get all users
router.get('/', (req, res) => {
    res.status(200).json(User);
})

// Get user by id
router.get('/:id', (req, res) => {
    const requestedUser = User.find(user => user.id === Number(req.params.id));
    if(requestedUser)
        res.status(200).json(requestedUser);
    else
        res.status(404).json('User not found');
})

// Create a user
router.post('/', (req, res) => {
    const newUser = { id: 11, ...req.body};
    res.status(200).json(newUser); 
})

// Update user with put
router.put('/:id', (req, res) => {
    const requestedUser = User.find(user => user.id === Number(req.params.id));
    if(requestedUser) {
        if(req.body.id && req.body.name && req.body.username && req.body.email && 
            req.body.address && req.body.address.street && req.body.address.city ) {
                const { id, ...others } = req.body;
                res.status(200).json({ id: req.params.id, ...others});
        } else {
            res.status(400).json('Bad request');
        }
    } else {
        res.status(404).json('User not found');
    }
})

// Update user with patch
router.patch('/:id', (req, res) => {
    const requestedUser = User.find(user => user.id === Number(req.params.id));
    if(requestedUser) {
        const requestedProperties = Object.keys(req.body);
        const userProperties = Object.keys(requestedUser);
        const responseJson = {}
        userProperties.forEach(userProp => {
            if(userProp === 'id') 
                responseJson['id'] = req.params.id;
            else if(requestedProperties.includes(userProp)) {
                responseJson[userProp] = req.body[userProp];
            } else {
                responseJson[userProp] = requestedUser[userProp];
            }
        })
        res.status(200).json(responseJson);
    } else {
        res.status(404).json('User not found');
    }
})

// Delete user
router.delete('/:id', (req, res) => {
    const requestedUser = User.find(user => user.id === Number(req.params.id));
    if(requestedUser)
        res.status(200).json('User has been deleted successfully');
    else
        res.status(404).json('User not found');
})

module.exports = router;