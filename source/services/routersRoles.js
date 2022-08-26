controllerRoutersRoles = require('../controller/routersRoles.js')
 url = require("url")

 const cRoutersRoles = (req, res)=>{
    controllerRoutersRoles.cRoutersRoles(req.body, res)
 }

 const rRoutersRoles = (req, res)=>{
    controllerRoutersRoles.rRoutersRoles(res)
    console.log('carechimba')
 }
 
 const uRoutersRoles = (req, res) => {
    controllerRoutersRoles.uRoutersRoles(req.params, req.body)
 }

const dRoutersRoles = (req, res) => {
    controllerRoutersRoles.dRoutersRoles(req)
}

module.exports = {cRoutersRoles, rRoutersRoles, uRoutersRoles, dRoutersRoles}