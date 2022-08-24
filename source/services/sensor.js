controller = require('../controller/sensor')
url = require("url")

const getSms = (req, res) => {
    var msgFrom = req.body.From
    var msgBody = req.body.Body
    controller.findByOrigen(msgFrom, msgBody)
} 

const getSensorData = (req, res) => {
    const query = url.parse(req.url, true).query
    
    res.header("Access-Control-Allow-Origin", "*");
    controller.getSensorsData(res, query.Origen)
}

const getSensorsOrigen = (req, res) => {
    controller.getSensorsOrigen(res)
}

module.exports = {getSms, getSensorData, getSensorsOrigen}