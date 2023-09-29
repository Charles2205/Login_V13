const {Sequelize,DataTypes} = require('sequelize')
const dbConnect = require('../dbConnect')

const user = dbConnect.define('users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    user_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
user.sync({alter:true})
module.exports = user
