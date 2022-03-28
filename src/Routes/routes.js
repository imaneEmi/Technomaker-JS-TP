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

router.get("/find-universities-by-country", function(req, res) {
    res.render("form",{msg:""});
});

router.use(function(req, res) {
    res.status(404).render('error-404');
});


module.exports = router