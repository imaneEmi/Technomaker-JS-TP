const express = require('express')
const router = express.Router()
const { universityController } = require('../controllers/university')

router.get('/universities/:country', universityController.getUniversities)
router.get('/universities/', universityController.getAll)


module.exports = router