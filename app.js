const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 9705
const userRoute = require('./routes/user')
const ejs = require('ejs')
const expressEjsLayouts = require('express-ejs-layouts')
const dbConnect = require('./services/dbConnect')
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





app.use('/',userRoute)





const startServer=async()=>{
    try {
        await dbConnect.authenticate()
        app.listen(PORT,()=>{
            console.log(`server has running on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}
startServer()