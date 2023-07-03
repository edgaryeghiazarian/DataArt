const mysql2 = require('mysql2');

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "rootUserPass",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    const sql = "SELECT MAX(age) FROM students WHERE age < 24 AND age > 15";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        process.exit(0);
    });
});