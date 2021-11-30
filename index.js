// Import packages
const dotenv = require('dotenv')
const express = require('express');
const app = express();
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const jsonwebtokenRoute = require('./routes/jsonwebtoken');

// To be able to use dotenv file
dotenv.config();

// To be able to take json objects inside request body
app.use(express.json());

app.use('/users', userRoute);
app.use('/posts', postRoute);
app.use('/jsonwebtoken', jsonwebtokenRoute);

app.listen(8000, () => {
    console.log('Listening port number 8000...');
})