const db = require("../config/database.js");

const postController = {
    create(req, res) {
        let post = { title: req.body.title, body: req.body.body };
        let sql = "INSERT INTO posts SET ?";
        db.query(sql, post, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("Post added...");
        });
    },
    createDB(req, res) {
        let sql = "CREATE DATABASE expressDB";
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("Database created...");
        });
    },
};

module.exports = postController;
    