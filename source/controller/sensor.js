const sensorModel = require('../models/sensor')

const getSensorsData = (res,Origen) => {
    Origen = '+57' + Origen
    const sensors = sensorModel.find({Origen:Origen}).exec((error, data) => {
        if(!error){
            res.json(data[0])
        }
    })
}

const createSensor = (origen, body) => {
    sensorModel.create({
        Origen:origen,
        TempActual:body,
        Temperatura:[body]
    })
}

const updateSensor = (Doc, body) => {
    sensorModel.findById(Doc._id, (error, doc) => {
        doc.TempActual = body
        doc.Temperatura.push(body)
        doc.save()
    })
}

const findByOrigen = (origen, body) => {
    
    const cursor = sensorModel.exists({Origen:origen}, (error, doc) => {
        if(doc !== null){
            updateSensor(doc,body)
        }else{
            createSensor(origen, body)
        }
    })
}

const getSensorsOrigen = (res) =>{
    sensorModel.find({}).exec((error, data) => {
        if(!error){
            let origens = []
            data.map((value, index) => origens.push(value.Origen))
            res.send(origens)
        }
    })
}

module.exports = {getSensorsData , findByOrigen, getSensorsOrigen}