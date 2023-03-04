require('dotenv').config();

module.exports = {
    host: process.env.host || 'localhost',
    port: process.env.port || 8080,
    api_version: process.env.api_version
}