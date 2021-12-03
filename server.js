const dotenv = require('dotenv');
const app = require('./app');

// To be able to use dotenv file
dotenv.config();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening port number ${port}...`);
})