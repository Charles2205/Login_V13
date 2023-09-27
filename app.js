const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 9705
const userRoute = require('./routes/signIn')
const ejs = require('ejs')
const expressEjsLayouts = require('express-ejs-layouts')
const app = express()



app.set('view engine','ejs')
app.set('layout',__dirname+'/views/layout') 
app.set('views',__dirname+'/views/pages')




// adding middlewares
app.use(express.static('public'))
app.use(expressEjsLayouts)
app.use(express.urlencoded({extended:false}))





app.get('/',userRoute)
const startServer=async()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`server has running on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}
startServer()