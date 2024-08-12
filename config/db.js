const mysql2 = require('mysql2/promise');

const mysqlpool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Animesh@1311',
    database: 'problems_db',
    waitForConnections: true,
});

module.exports = mysqlpool; 