const dbModel = require('../services/models/users')
const bcrypt = require('bcrypt')

const viewPage =(req,res)=>{
    res.render('signIn')
}



const signUp= async (req,res)=>{
    try {
        const {full_name,email,user_name,password}=req.body
        const hashPassword = await bcrypt.hash(password,10)
        const results =  await  dbModel.create({full_name,email,user_name,"password":hashPassword})
        res.redirect('/success')
    } catch (error) {
        console.log(error);
    }
}
const signIn = async(req,res)=>{
    try {
        const {user_name,password} =req.body
     //   determine if the username is vaild in the database
         const results = await dbModel.findOne({where:{user_name}})
         if(!results){
            return  res.send('Invaild Credentials 😒')
         }
         const correctPassword = results.password
 
         // comparing hashed pass with current password
         const isCorrectPassword =await bcrypt.compare(password,correctPassword)
         if(!isCorrectPassword){
            return res.send('Invaild Credentials 😒')
         }
        //  req.session.user =results.id
     
        //  res.send('Logged in Successfully  🎉 🎊')
        res.redirect('/home')
        //  console.log(req.session)
       
     } catch (error) {
        console.log(error);
     }
}
const success =(req,res)=>{
    res.render('loginsuccessful')
}
const viewSignIn =(req,res)=>{
    res.render('signIn')
}
const signUpPage=(req,res)=>{
    res.render('signUp')
}
const home=(req,res)=>{
    res.render('home')
}
module.exports={
    viewPage,
    signUp,
    success,
    viewSignIn,
    signUpPage,
    home,
    signIn
}