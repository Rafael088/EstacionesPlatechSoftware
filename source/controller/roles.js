const rolesModel = require('../models/roles')

//Create
const cRol =  async (body, res) =>{
    console.log(body)
    const rol = await new rolesModel({
        body
    })
    const resultado = await rol.save()

}
//Read
const rRol =  async (res) => {
    await rolesModel.find().exec((error, data)=>{
    res.send(data)
   })
}  
//Update
const uRol =  (doc, body) => {
    const rol =  rolesModel.updateOne({_id:doc._id}, {
        $set:{
            body
        }
    })
}
//Delete
const dRol =  (doc) => {
    const rol =  rolesModel.findByIdAndDelete({_id:doc._id})
}


module.exports = {cRol, rRol, uRol, dRol}