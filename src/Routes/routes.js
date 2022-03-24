const express = require('express')
const router = express.Router()
const  { universityController} = require('../controllers/university')

router.get('/universities',universityController.getUniversities)

module.exports = router