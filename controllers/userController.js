const dbModel = require('../services/models/users')
const viewPage =(req,res)=>{
    // res.send('testing')
    res.render('signIn')
}

const signUp=(req,res)=>{
    
}

module.exports={
    viewPage
}