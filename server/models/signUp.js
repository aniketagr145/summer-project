const mongoose = require('mongoose')

var signUp  = new mongoose.Schema({
    name: {type:String},
    email : {type:String},
    password:{type:String}
});

module.exports= mongoose.model('user',signUp)