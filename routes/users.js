var express = require('express');
var router = express.Router();
var users = require("../users.json");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

/* GET users listing. */
router.get('/alwaysthrows', function(req, res) {
    throw new Error("This always throws");
});

module.exports = router;
