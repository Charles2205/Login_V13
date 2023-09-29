const express = require('express')
const app = express.Router()
const {viewPage, signUp,loginsuccess} = require('../controllers/userController')

app.get('/',viewPage)

app.post('/signup',signUp)
app.get('/loginsuccessful',loginsuccess)


module.exports = app