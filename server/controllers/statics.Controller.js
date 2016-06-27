var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('mainview');
});

/* GET home page. */
router.get('/partials/users/:name', function(req, res) {
    var name = req.params.name;
    res.render('partials/users/' + name);
});

/* GET home page. */
router.get('*', function(req, res) {
    res.render('mainview');
});

module.exports = router;