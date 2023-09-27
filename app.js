const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 9705
const app = express()


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