const mysql = require('mysql2');

const pool = mysql.createPool({
host: 'localhost',
user: 'root',
database: 'mind_employ',
password: ''
});

module.exports = pool.promise();