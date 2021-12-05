const fs = require('fs');

// Get all users from file
const users = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/users.json`)
);

// Check if the user exists with requested id
exports.checkUser = (req, res, next) => {
    const user = users.find(user => user.id === Number(req.params.id));
    if(!user) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    req.user = user;
    next();
}
// Get all users
exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    });
}
// Get a user by id
exports.getOneUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            user: req.user
        }
    });
}
// Create new user
exports.createUser = (req, res) => {
    const newId = users[users.length - 1].id + 1;
    const newUser = { id: newId, ...req.body };
    users.push(newUser);
    fs.writeFile(`${__dirname}/../data/users.json`, JSON.stringify(users), err => {
        if(!err) {
            res.status(201).json({
                status: 'success',
                data: {
                    user: newUser
                }
            });
        }
    })
}
// Update user using put method
exports.updateUserWithPut = (req, res, next) => {
    const index = users.indexOf(req.user);
    const updatedUser = { id: Number(req.user.id), ...req.body };
    users[index] = updatedUser;
    req.updatedUser = updatedUser;
    next();
}
// Update user using patch method
exports.updateUserWithPatch = (req, res, next) => {
    const index = users.indexOf(req.user);
    const requestedProperties = Object.keys(req.body);
    const userProperties = Object.keys(req.user);
    const updatedUser = {}
    userProperties.forEach(userProp => {
        if(userProp === 'id') 
            updatedUser['id'] = Number(req.user.id);
        else if(requestedProperties.includes(userProp)) {
            updatedUser[userProp] = req.body[userProp];
        } else {
            updatedUser[userProp] = req.user[userProp];
        }
    })
    users[index] = updatedUser;
    req.updatedUser = updatedUser;
    next();
}
// Delete user
exports.deleteUser = (req, res) => {
    const index = users.indexOf(req.user);
    users.splice(index, 1);
    fs.writeFile(`${__dirname}/../data/users.json`, JSON.stringify(users), err => {
        if(!err) {
            res.status(204).json({
                status: 'success',
                data: null
            });
        } else {
            console.log(err.message);
        }
    })
}
// Write users array to json file after update operations
exports.writeFileAfterUpdate = (req, res) => {
    fs.writeFile(`${__dirname}/../data/users.json`, JSON.stringify(users), err => {
        if(!err) {
            res.status(200).json({
                status: 'success',
                data: {
                    user: req.updatedUser
                }
            });
        }
    })
}