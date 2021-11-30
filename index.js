// Import packages
const express = require('express');
const app = express();
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');

// To be able to take json objects inside request body
app.use(express.json());

app.use('/users', userRoute);
app.use('/posts', postRoute);

app.listen(8000, () => {
    console.log('Listening port number 8000...');
})