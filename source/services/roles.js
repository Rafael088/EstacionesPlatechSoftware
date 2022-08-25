controller = require('../controller/roles')
url = require("url")

const cRol = (req, res) =>{
    var msgBody = req.body.Body
    controller.createRol(msgBody)
}
const rRol = (req, res) =>{
    res(controller.readRol())
}
const uRol = (req, res) =>{
    var msgFrom = req.body.From
    var msgBody = req.body.Body
    controller.updateRol(msgFrom ,msgBody)
}
const dRol = (req, res)=>{
    var msgFrom = req.body.From
    controller.deleteRol(msgFrom)
}

module.exports = {cRol, rRol, uRol, dRol}