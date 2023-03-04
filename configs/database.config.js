const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.host,
    port: process.env.db_port,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name
});

module.exports = db;