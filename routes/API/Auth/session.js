const express = require('express')
const router = express.Router()
const session = require('express-session')

router.use(session({
    secret : process.env.SESSION_SECRET,
    name : process.env.SESSION_NAME,
    resave : false,
    saveUninitialized : false
}))

module.exports = router