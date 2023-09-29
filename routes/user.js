const express = require('express')
const app = express.Router()
const {viewPage, signUp, viewSignIn,signUpPage, success,home} = require('../controllers/userController')

app.get('/',viewPage)
app.get('/signin',viewSignIn)
app.get('/success',success)
app.get('/signup',signUpPage)
app.get('/home',home)
app.post('/signup',signUp)




module.exports = app