var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
var cors=require('cors');
app.use(cors({origin:true,credentials: true}));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var csvtojson = require('./csvjson');
app.use('/csv', csvtojson);

module.exports = app;