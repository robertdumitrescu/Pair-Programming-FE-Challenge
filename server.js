/**
 * Express Framework
 * Express Framework it's a micro framework used to develop and integrate
 * easily Node.Js applications
 * @module express
 * @link "https://github.com/strongloop/express/wiki" | Express Wiki
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var apiController = require('./server/controllers/api.Controller.js');
var StaticsController = require('./server/controllers/statics.Controller.js');

var app = express();

app.use(bodyParser.json());

global.appRoot = path.resolve(__dirname);

app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('views','./views');
app.set('view engine', 'ejs');


app.use('/', apiController);
app.use('/', StaticsController);

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Development mode: Node front-end resume listening at http://%s:%s', host, port);
});