const express = require("express");
const databaseController = require("../controllers/databaseController");
const router = express.Router();

router.get('/', databaseController.createDB);


module.exports = router;