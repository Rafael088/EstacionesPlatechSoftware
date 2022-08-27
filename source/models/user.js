const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number

    },
    email:{
        type     : String,
        //required : true,
        //unique   : true
    },
    passwd:{
        type     : String,
        required : true,
    },
    rol:{
        type    : String,
        default : "unassigned"
    }

}, { versionKey: false })

userSchema.pre('save',function(next){
    const user = this
    
    if(!user.isModified("passwd")){
        return next()
    }

    bcrypt.genSalt(10, (error, salt) => {
        if(error){
            next(error)
        }

        bcrypt.hash(user.passwd, salt , null, (error, hash) => {
            if(error){
                next(error)
            }

            user.passwd = hash
        })
    })

    return next()
})

module.exports = mongoose.model('user', userSchema)

