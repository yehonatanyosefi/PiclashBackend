const express = require('express')
const { postImg } = require('./ai.controller')
const router = express.Router()

router.post('/genImg', postImg)

module.exports = router

// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
// const { log } = require('../../middlewares/logger.middleware')
