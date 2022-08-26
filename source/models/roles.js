const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
    name:{
        type:String
    },
    routId:[{
        type:Array
    }] 
}, {versionKey:false})

module.exports = mongoose.model('roles', rolesSchema, 'rol')


