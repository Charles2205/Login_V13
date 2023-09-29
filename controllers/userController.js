const dbModel = require('../services/models/users')
const viewPage =(req,res)=>{
    // res.send('testing')
    res.render('signIn')
}

const signUp= async (req,res)=>{
    try {
        const {full_name,email,user_name,password}=req.body
        const results =  await  dbModel.create({full_name,email,user_name,password})
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    viewPage,
    signUp
}