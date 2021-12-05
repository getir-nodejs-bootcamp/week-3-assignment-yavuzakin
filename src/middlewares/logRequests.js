const fs = require('fs');

const logRequestsToFile = (req, res, next) => {
    const requestedUrl = req.url;
    const requestMethod = req.method;
    const currentTime = new Date(Date.now());
    const logMessage = `${requestMethod} request to --> ${requestedUrl} <-- url. Created on ${currentTime}.\n`;

    fs.appendFile('./log.txt', logMessage, err => {
        if(err) return console.log(err);
    });
    next();
}

module.exports = logRequestsToFile;