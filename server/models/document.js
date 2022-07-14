const mongoose = require('mongoose')

var document  = new mongoose.Schema({
    title: {type:String},
    description : {type:String},
    pdf: {type:String},
    video: {type:String},

});

module.exports= mongoose.model('document',document);