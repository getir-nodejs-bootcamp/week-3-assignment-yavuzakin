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

// To be able to take json objects inside request body
app.use(express.json());
app.use(logRequestsToFile);
app.use('/jsonwebtoken', jsonwebtokenRoute);
app.use(verifyToken);
app.use('/users', userRoute);
app.use('/posts', postRoute);

app.listen(8000, () => {
    console.log('Listening port number 8000...');
})