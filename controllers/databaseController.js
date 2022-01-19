const db = require("../config/database.js");

const databaseController = {
    createDB(req, res) {
        let sql = "CREATE DATABASE expressDB";
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("Database created...");
        });
    },
};

module.exports = databaseController;
    