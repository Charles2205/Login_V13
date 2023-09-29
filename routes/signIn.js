const express = require('express')
const app = express.Router()
const {viewPage, signUp} = require('../controllers/userController')

app.get('/',viewPage)
app.post('/signup',signUp)


module.exports = app