const mysql = require("mysql2");
module.exports = mysql.createConnection({
    host : "localhost",
    user : "munzir",
    password : "munzirdev",
    database : "netplok"
});