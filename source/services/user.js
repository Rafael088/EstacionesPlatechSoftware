const controllerUser = require('../controller/user')
const {onError} = require('../utils/error/errorHandler')
url = require("url")

const Cuser = (req, res, next) => {
    controllerUser.Cuser(req.body, res)
}

const Ruser = (req, res) => {
    controllerUser.Ruser(res)
}

const Uuser = (req, res) => {
    const query = url.parse(req.url, true).query
    controllerUser.Uuser(query.id, req.body, res)
}

const Duser = (req, res) => {
    const query = url.parse(req.url, true).query
    console.log(query.id)
    controllerUser.Duser(query.id, res)
}

module.exports = {Cuser, Ruser, Uuser, Duser}
