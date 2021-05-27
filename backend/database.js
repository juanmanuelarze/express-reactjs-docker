const {HOST, USER, PASSWORD, DATABASE} = require('./config/database.js');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    database: DATABASE,
    password: PASSWORD
});

module.exports = connection;