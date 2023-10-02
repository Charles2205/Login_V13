const express = require('express')
const app = express.Router()
const {viewPage, signUp, viewSignIn,signUpPage, success,home, signIn} = require('../controllers/userController')

app.get('/',viewPage)
app.get('/sign-in',viewSignIn)
app.get('/success',success)
app.get('/sign-up',signUpPage)
app.get('/home',home)
app.post('/sign-up',signUp)
app.post('/sign-in',signIn)




module.exports = app