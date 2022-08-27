const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type     : String,
        required : true
    },
    passwd:{
        type     : String,
        required : true,
    },
    rol:{
        type:String
    }

}, { versionKey: false })

module.exports = mongoose.model('user', userSchema, 'users')
