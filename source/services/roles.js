controller = require('../controller/roles')
url = require("url")

const getRol = (req, res) => {
    var msgFrom = req.body.From
    var msgBody = req.body.Body
    controller.findByRol(msgFrom, msgBody)
} 

const getRolesData = (req, res) => {
    const query = url.parse(req.url, true).query
    
    res.header("Access-Control-Allow-Roles", "*");
    controller.getRolesData(res, query.idRol)
}

const getRolRouters = (req, res) => {
    controller.getRolRouters(res)
}

module.exports = {getRol, getRolesData, getRolRouters}