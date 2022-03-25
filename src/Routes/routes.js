const express = require('express')
const router = express.Router()
const {
    getUniversitiesByCountry,
    getAllUniversities
} = require('../controllers/university')

var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));




router.post('/universities', getUniversitiesByCountry)

router.get('/universities-of-the-world', getAllUniversities)

router.get("/", function(req, res) {
    res.render("form");
});

router.use(function(req,res){
    res.status(404).render('error-404');
});





module.exports = router