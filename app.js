const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 9705
const userRoute = require('./routes/user')
const ejs = require('ejs')
const expressEjsLayouts = require('express-ejs-layouts')
const dbConnect = require('./services/dbConnect')
const expressSession = require('express-session')
const APP_SECRET = process.env.APP_SECRET
const { default: helmet } = require('helmet')

const app = express()

app.use(helmet())

app.set('view engine','ejs')
app.set('views',__dirname+'/views/pages') 
app.set('layout',__dirname+'/views/layout')



// adding middlewares
app.use(express.static('public'))
app.use(expressEjsLayouts)
app.use(express.urlencoded({extended:false}))


app.use(expressSession({
    secret: APP_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{}
}))


app.use('/',userRoute)





const startServer=async()=>{
    try {
        await dbConnect.authenticate()
        app.listen(PORT,()=>{
            console.log(`\x1b[32m Server is running on \x1b[31m http://localhost:${PORT} \x1b[33m`);

        })
    } catch (error) {
        console.log(error);
    }
}
startServer()