const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    userName:String,
    email:String,
    password:String,
    photo:{type:String,default:'https://i.imgur.com/lh8Sd5C.png'},
    role:{type:String,default:'ADMIN'}
},
{
    timestamps:true, versionKey:false
})

module.exports = mongoose.model('Auth',authSchema,'Auth')