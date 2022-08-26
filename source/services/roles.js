controllerRol = require('../controller/roles.js')
url = require("url")

const cRol = (req, res) =>{
    controllerRol.cRol(req, res)
}
const rRol = (req, res) =>{
    controllerRol.rRol(res)
}
const uRol = (req, res) =>{
    var msgFrom = req.body.From
    var msgBody = req.body.Body
    controllerRol.uRol(msgFrom ,msgBody)
}
const dRol = (req, res)=>{
    controllerRol.dRol(res)
}

module.exports = {cRol, rRol, uRol, dRol}