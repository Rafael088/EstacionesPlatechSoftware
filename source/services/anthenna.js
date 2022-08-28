const controllerAnth = require('../controller/anthenna')
const {onError} = require('../utils/error/errorHandler')
url = require('url')

const Canthenna = (req, res,) => {
    controllerAnth.Canthenna(req.body, res)
}

const Ranthenna = (req, res) => {
    controllerAnth.Ranthena(res)
}

const Uanthenna = (req, res) => {
    const query = url.parse(req.url, true).query
    controllerAnth.Uanthenna(query.id, req.body, res)
}

const Danthenna = (req, res) => {
    const query = url.parse(req.url, true).query
    controllerAnth.Danthenna(query.id, res)
}

const RiaAnthe = (req, res) => {
    const query = url.parse(req.url, true).query
    controllerAnth.RiaAnthe(query.id, res)
}

module.exports = {Canthenna, Ranthenna, Uanthenna, Danthenna, RiaAnthe}