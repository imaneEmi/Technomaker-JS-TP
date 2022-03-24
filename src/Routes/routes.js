const express = require('express')
const router = express.Router()

const  { 
    getUniversities
} = require('../Controllers/uniersity.js')

router.get('/',getUniversities)