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

module.exports = {Cuser}
