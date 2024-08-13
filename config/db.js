const mysql2 = require('mysql2/promise');

const mysqlpool = mysql2.createPool({
    host: 'database-1.cz42ou6yyfqe.ap-south-1.rds.amazonaws.com',
    user: 'root',
    password: 'Animesh@1311',
    database: 'mysql',
    waitForConnections: true,
});

module.exports = mysqlpool; 