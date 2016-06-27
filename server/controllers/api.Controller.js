var express = require('express');
var router = express.Router();


/**
 * Api routes
 * */



router.get('/api/users/json', function(req, res) {
    res.sendFile(appRoot + "/data/data.json");
});











module.exports = router;