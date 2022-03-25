const express = require('express')
const router = express.Router()
const { universityController } = require('../controllers/university')

var bodyParser=require("body-parser");
router.use(bodyParser.urlencoded({extended:true}));

router.post('/universities',universityController.getUniversities)
router.get("/",function(req,res){
    res.render("form");
});

module.exports = router