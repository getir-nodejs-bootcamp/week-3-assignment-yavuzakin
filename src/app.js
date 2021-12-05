// Import packages
const express = require('express');
// Routers
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const jwtRouter = require('./routes/jwtRoutes');
// Common middlewares
const verifyToken = require('./middlewares/verifyToken');
const logRequestsToFile = require('./middlewares/logRequests');

const app = express();

// Middlewares
app.use(express.json());
app.use(logRequestsToFile);
app.use('/api/v1/jwt', jwtRouter);
app.use(verifyToken);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);

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

module.exports = app;
