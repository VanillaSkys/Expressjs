const database = require("../configs/database.config");

const ProductModel = 
  database.query(
    `CREATE TABLE IF NOT EXISTS product(id VARCHAR(255) NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL, price FLOAT, image VARCHAR(255) NULL );`
  );
module.exports = ProductModel;