var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const csvFilePath='./week_14_csv.csv';
const csv=require('csvtojson');

router.get('/', function (req, res) {    
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        res.status(200).send(jsonObj);console.log(jsonObj);
    })
});

module.exports = router;