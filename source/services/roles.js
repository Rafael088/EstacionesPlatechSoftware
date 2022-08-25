controller = require('../controller/roles')
url = require("url")

const createRol = (req, res) =>{
    var msgBody = req.body.Body
    controller.createRol(msgBody)
}
const readRol = (req, res) =>{
    res(controller.readRol())
}
const updateRol = (req, res) =>{
    var msgFrom = req.body.From
    var msgBody = req.body.Body
    controller.updateRol(msgFrom ,msgBody)
}
const deleteRol = (req, res)=>{
    var msgFrom = req.body.From
    controller.deleteRol(msgFrom)
}

module.exports = {readRol, createRol, updateRol, deleteRol}