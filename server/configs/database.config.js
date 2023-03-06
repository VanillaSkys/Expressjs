const mysql = require('mysql2');
require('dotenv').config();
const connection = mysql.createPool({
    host: process.env.db_host || 'localhost',
    port: process.env.db_port || 3306,
    user: process.env.db_user || 'root',
    password: process.env.db_password || '123456789',
});

connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.db_name}\`;`);


const db = mysql.createPool({
    host: process.env.db_host || 'localhost',
    port: process.env.db_port || 3306,
    user: process.env.db_user || 'root',
    password: process.env.db_password || '123456789',
    database: process.env.db_name || 'expressjs'
});

module.exports = db;