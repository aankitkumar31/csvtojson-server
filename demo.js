var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const csvtojsonV2=require("csvtojson/v2");
// CREATES A NEW USER

const csvFilePath='./week_14_csv.csv';
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})

const jsonArray= csv().fromFile(csvFilePath);

router.get('/', function (req, res) {
    //const jsonArray=await csv().fromFile(csvFilePath);
    console.log('asdasdas')
    res.status(200).send('');
});



module.exports = router;