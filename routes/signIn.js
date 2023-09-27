const express = require('express')
const app = express.Router()
const {viewPage} = require('../controllers/userController')

app.get('/',viewPage)


module.exports = app