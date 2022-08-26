const routersRolesModel = require('../models/routersRoles')

//Create
const cRoutersRoles = async (body, res) =>{
    const rout = await new routersRolesModel({
        body
    })
    const resultado = await rout.save()
}
//Read
const rRoutersRoles = async (res) =>{
    await routersRolesModel.find().exec((error, data)=>{
        res.send(data)
    })
}
//Update
const uRoutersRoles = (doc, body)=>{
    const rout = routersRolesModel.updateOne({_id:doc._id}, {
        $set:{
            body
        }
    })
}

//Delete
const dRoutersRoles = (doc)=>{
    const rout = routersRolesModel.deleteOne({_id:dov._id})
}

module.exports = {cRoutersRoles, rRoutersRoles, uRoutersRoles, dRoutersRoles}