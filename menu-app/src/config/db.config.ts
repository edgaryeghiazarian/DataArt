const mysql = require('mysql2');
import * as dotenv from "dotenv";
dotenv.config();

const dbCon = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

dbCon.connect(function(err){
    if (err) {
        console.log("Error while connecting to database!")
        throw err;
    }
    console.log("Database connected!");
});
module.exports = dbCon;