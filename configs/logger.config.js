const path = require('path');
const rfs = require('rotating-file-stream');

const logger = rfs.createStream('access.log', {
    interval: '1d',
    path: path.join(__dirname, '../log')
})

module.exports = logger;