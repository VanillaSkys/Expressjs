const database = require("../configs/database.config");

const AdminModel = database.connect((err) => {
  if (err) throw err;
  database.query(
    `CREATE TABLE IF NOT EXISTS admin(id VARCHAR(255) NOT NULL PRIMARY KEY, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL);`
  );
});
module.exports = AdminModel;