const mysql = require("mysql");

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'pet_store'
  });