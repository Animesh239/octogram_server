const mysql2 = require('mysql2/promise');

const mysqlpool = mysql2.createPool({
    host: 'ec2-13-234-122-156.ap-south-1.compute.amazonaws.com',
    user: 'root',
    password: 'Animesh@1311',
    database: 'problems_db',
    waitForConnections: true,
});

module.exports = mysqlpool; 