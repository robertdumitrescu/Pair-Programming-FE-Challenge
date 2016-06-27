var express = require('express');
var router = express.Router();


/**
 * Api routes
 * */



router.get('/api/portfolio/json', function(req, res) {
    res.send("/data/portfolio/portfolio.json");
});

/**
 * Resume
 * */

router.get('/api/resume/json', function(req, res) {
    res.send("/data/resume/resume.json");
});









module.exports = router;