var express = require('express');
var router = express.Router();
var users = require("../users.json");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/:id', function(req, res, next) {
 let user = users.find(user=> user.id == req.params.id);
 if(user) res.json(user);
 else {
     let err = new Error("Not Found");
     err.status = 404;
     throw err;
 }
});

/* GET users listing. */
router.get('/alwaysthrows', function(req, res) {
    throw new Error("This always throws");
});

module.exports = router;
