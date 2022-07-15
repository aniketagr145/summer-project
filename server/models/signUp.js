const mongoose = require('mongoose')

var usersLoginSchema = new mongoose.Schema({
    name: {type:String,required:true},
    email : {type:String,required:true,unique:true},
    mobileNum : {type:Number,required:true,unique:true},
    password : {type:String,required:true}
})

module.exports= mongoose.model('user',usersLoginSchema)