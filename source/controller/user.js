const { response } = require('express')
const { object } = require('joi')
const userModel = require('../models/user')
const hash = require("../utils/bcrypt/hashPasswd")
const rolesModel = require('../models/roles')

const Cuser = (body, res) => {

    const user = new userModel(body)
    var err = user.joiValidate(body)
     
    if(err.hasOwnProperty('error')){
        res.status(400).send(err.error.details) 
    }else{
        user.save()
        .then (() => res.status(200).send(user))
        .catch(() => res.status(500).send("usuario ya existe"))
    }
}

const Ruser = (res) => {
    userModel.find({}, (error, data) => {
        if(!error){
            res.status(200).send(data)
        }else{
            res.status(500).send(" error al buscar los usuarios")
        }
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

const AddRolUser = (id, rol, res)=>{
    userModel.findByIdAndUpdate(
        id,
        {$set:rol},
        (error, data) => res.send(data)
    )
}

const RroutsUser = (id, res) =>{
    const user = userModel.findById(id)
    rolesModel.findOne(user.rol, (error, data) => {
        if(!error){
            res.status(200).send(data)
        }else{
            res.status(500).send(" error")
        }
    })
    
}
module.exports = {Cuser, Ruser, Uuser, Duser, AddRolUser, RroutsUser}
