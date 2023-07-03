const mysql2 = require('mysql2');

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "rootUserPass",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    // const sql = "INSERT INTO students (age) VALUES ('Edgar'), ('Armen'), ('Eliza'), ('John'), ('Luiza')";
    // const sql = "INSERT INTO `classes` (name) VALUES ('Java'), ('JavaScript'), ('C++')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        process.exit(0);
    });
});