var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/alwaysthrows', function(req, res) {
    throw new Error("This always throws");
});

module.exports = router;
