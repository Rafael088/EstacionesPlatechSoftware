const rolesModel = require('../models/roles')
import uniquid from 'uniqid'

const getRolesData = (res,idRol) => {
    const roles = rolesModel.find({idRol:idRol}).exec((error, data) => {
        if(!error){
            res.json(data[0])
        }
    })
}

const createRol = (name, body) => {
    rolesModel.create({
        idRol: uniquid(),
        nameRol:name,
        rolRouters:[body]
    })
}

const updateRol = (Doc, body) => {
    rolesModel.findById(Doc._id, (error, doc) => {
        doc.nameRol = body
        doc.rolRouters.push(body)
        doc.save()
    })
}

const findByRol = (nameRol, body) => {
    
    const cursor = rolesModel.exists({nameRol:nameRol}, (error, doc) => {
        if(doc !== null){
            updateRol(doc,body)
        }else{
            createRol(nameRol, body)
        }
    })
}

const getRolRouters = (res) =>{
    rolesModel.find({}).exec((error, data) => {
        if(!error){
            let routers = []
            data.map((value, index) => routers.push(value.rolRouters))
            res.send(rolRouters)
        }
    })
}

module.exports = {getRolesData , findByRol, getRolRouters}