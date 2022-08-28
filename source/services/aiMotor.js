const controllerAi = require('../controller/aiMotor')
const {onError} = require('../utils/error/errorHandler')
url = require('url')

const CaiMotor = (req, res,) => {
    controllerAi.CaiMotor(req.body, res)
}

const RaiMotor = (req, res) => {
    controllerAi.RaiMotor(res)
}

const UaiMotor = (req, res) => {
    const query = url.parse(req.url, true).query
    controllerAi.UaiMotor(query.id, req.body, res)
}

const DaiMotor = (req, res) => {
    const query = url.parse(req.url, true).query
    controllerAi.DaiMotor(query.id, res)
}

module.exports = {CaiMotor, RaiMotor, DaiMotor, UaiMotor}