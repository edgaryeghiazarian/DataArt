const mysql2 = require('mysql2');

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "rootUserPass",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    // const sql = "UPDATE students SET age = 18 WHERE id = 2";
    // const sql = "UPDATE students SET age = 23 WHERE id = 3";
    // const sql = "UPDATE students SET age = 30 WHERE id = 4";
    // const sql = "UPDATE students SET age = 22 WHERE id = 5";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        process.exit(0);
    });
});