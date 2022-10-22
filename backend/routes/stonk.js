const express = require('express')

const getStonks = require('../controllers/stonkController')


const router = express.Router()


// GET all workouts
router.get('/', getStonks)