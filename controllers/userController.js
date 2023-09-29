const dbModel = require('../services/models/users')
const viewPage =(req,res)=>{
    res.render('signUp')
}



const signUp= async (req,res)=>{
    try {
        const {full_name,email,user_name,password}=req.body
        const results =  await  dbModel.create({full_name,email,user_name,password})
        res.redirect('loginsuccessful')
    } catch (error) {
        console.log(error);
    }
}
const loginsuccess =(req,res)=>{
    res.render('loginsuccessful')
}
const signIn =(req,res)=>{
    res.render('signIn')
}

module.exports={
    viewPage,
    signUp,
    loginsuccess,
    signIn
}