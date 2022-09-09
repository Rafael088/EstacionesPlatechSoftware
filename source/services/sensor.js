const sensorController = require('../controller/sensor')

const Csensor = (req, res) =>{
    sensorController.Csensor(req.body, res)
}

const Rsensor = (req, res) =>{
    sensorController.Rsensor(res)
}

const Usensor = (req, res) => {
    const query = url.parse(req.url, true).query
    sensorController.Usensor(query.id, req.body, res)
}

const Dsensor = (req, res) => {
    const query = url.parse(req.url, true).query
    sensorController.Dsensor(query.id, res)
}

const sensorId = (req, res) => {
    const query = url.parse(req.url, true).query
    sensorController.sensorId(query.id, res)
}

module.exports = {Csensor, Rsensor, Usensor, Dsensor, sensorId}