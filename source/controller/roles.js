const rolesModel = require('../models/roles')

//Read
const readRol = async (res)=>{
    const roles = await rolesModel.find()
    if(!error) res.json(data[0])
}  
//Create
const createRol = async (body) =>{
    const rol = await new rolesModel({
        body
    })
}
//Update
const updateRol = async (doc, body)=>{
    const rol = await rolesModel.updateOne({_id:doc._id},{
        $set:{
            body
        }
    })
}
//Delete
const deleteRol = async (doc)=>{
    const rol = await rolesModel.deleteOne({_id:doc._id})
}


module.exports = {readRol, createRol, updateRol, deleteRol}