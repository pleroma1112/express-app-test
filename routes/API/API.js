const express = require('express')
const router = express.Router()

const sessionRouter = require('./Auth/session')
const countRouter = require('./Count/count')

router.use(sessionRouter)

router.use('/counter',countRouter)

module.exports = router