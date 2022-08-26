const { response } = require('express')
const userModel = require('../models/user')

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

const Uuser = (id, body, res) => {
    userModel.findByIdAndUpdate(
        id,
        {$set:body}, 
        (error, data) => res.send(data)
    )
}

const Duser = (id, res) => {
    userModel.findByIdAndDelete(
        id,
        (error, data) => res.send(data)
    )
}

module.exports = {Cuser, Ruser, Uuser, Duser}
