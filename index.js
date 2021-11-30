// Import packages
const dotenv = require('dotenv')
const express = require('express');
const app = express();
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const jsonwebtokenRoute = require('./routes/jsonwebtoken');
const verifyToken = require('./middlewares/verifyToken');
const logRequestsToFile = require('./middlewares/logRequests');

// To be able to use dotenv file
dotenv.config();

// Middlewares
app.use(express.json());
app.use(logRequestsToFile);
app.use('/jsonwebtoken', jsonwebtokenRoute);
app.use(verifyToken);
app.use('/users', userRoute);
app.use('/posts', postRoute);

// Simple routing
app.get('/home', (req, res) => {
    res.status(200).send('Home Page');
})
app.get('/about', (req, res) => {
    res.status(200).send('About Page');
})
app.get('*', (req, res) => {
    res.status(404).send('404 Not Found!');
})

app.listen(8000, () => {
    console.log('Listening port number 8000...');
})