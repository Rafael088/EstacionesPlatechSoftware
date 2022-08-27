const { response } = require('express')
const userModel = require('../models/user')
const hash = require("../utils/bcrypt/hashPasswd")

const Cuser = (body) => {
    const user = new userModel(body)

    try{
        user.save()
        return {user:user, error:NaN}
    }catch{
        const error = "error en controlador"
        return {user:NaN, error:error}
    }

}

const Ruser = (res) => {
    userModel.find({}, (error, data) => {
        res.send(data)
    })
}

const Uuser = async (id, body, res) => {
    
    if(body.passwd != undefined){
        hash.hashPasswd(body.passwd).then((data) => {
            userModel.findByIdAndUpdate(
                id,
                {$set:{
                    passwd:data
                }}, 
                (error, data) => res.send(data)
            )
        })
    }else{
        userModel.findByIdAndUpdate(
            id,
            {$set:body}, 
            (error, data) => res.send(data)
        )
    }
}

const Duser = (id, res) => {
    userModel.findByIdAndDelete(
        id,
        (error, data) => res.send(data)
    )
}

module.exports = {Cuser, Ruser, Uuser, Duser}
