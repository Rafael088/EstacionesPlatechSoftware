const rolesModel = require('../models/roles')

//Create
const cRol =  async (body) =>{
    const rol = await new rolesModel(body)
    try{
        rol.save()
        return { rol: rol, error:NaN}
    }catch{
        const error = "Error en controlador"
        return {rol:NaN, error : error}
    }
}
//Read
const rRol =  async (res) => {
    await rolesModel.find({}).exec((error, data)=>{
        res.send(data)
   })
}  

//Update
const uRol =  (id, body, res) => {
    rolesModel.findByIdAndUpdate(
        id,
        {$set:body}, 
        (error, data) => res.send(data)
    )
}

//Delete
const dRol =  (id, res) => {
    rolesModel.findByIdAndDelete(
        id,
        (error, data) => res.send(data)
    )
}
//Add Routs
const addRoutsRol = (id, routs, res) =>{
    rolesModel.findByIdAndUpdate(
        id,
        {$set:routs}, 
        (error, data) => res.send(data)
    )
}

module.exports = {cRol, rRol, uRol, dRol, addRoutsRol}