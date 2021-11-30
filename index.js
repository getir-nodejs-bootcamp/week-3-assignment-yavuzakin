// Import packages
const express = require('express');
const app = express();
const userRoute = require('./routes/users');

// To be able to take json objects inside request body
app.use(express.json());

app.use('/users', userRoute);

app.listen(8000, () => {
    console.log('Listening port number 8000...');
})