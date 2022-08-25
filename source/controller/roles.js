const rolesModel = require('../models/roles')

//Create
const cRol =  (body) =>{
    const rol = new rolesModel({
        body
    })
}
//Read
const rRol =  (res) => {
    const roles = rolesModel.find()
    if(!error) res.json(data[0])
}  
//Update
const uRol =  (doc, body) => {
    const rol =  rolesModel.updateOne({_id:doc._id},{
        $set:{
            body
        }
    })
}
//Delete
const dRol =  (doc) => {
    const rol =  rolesModel.deleteOne({_id:doc._id})
}


module.exports = {cRol, rRol, uRol, dRol}