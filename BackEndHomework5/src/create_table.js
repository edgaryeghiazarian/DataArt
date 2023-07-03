const mysql2 = require('mysql2');

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "rootUserPass",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;

    // const sql = "CREATE TABLE `students` (`id` INT AUTO_INCREMENT PRIMARY KEY, `name` VARCHAR(100))";
    const sql = "CREATE TABLE `classes` (`id` INT AUTO_INCREMENT PRIMARY KEY, `name` VARCHAR(100))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        process.exit(0);
    });
});