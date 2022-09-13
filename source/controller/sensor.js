const { compareSync } = require("bcrypt")
const { date } = require("joi")
const { isNull } = require("url/util")
const sensorModel = require("../models/sensor")

const Csensor = (body, res) => {
    const sensor = new sensorModel(body)
    
    const errs = sensor.joiValidate(body)

    if(errs.hasOwnProperty('error')){
        res.status(400).send(errs.error.details) 
    }else{
        sensor.save()
        res.status(200).send(sensor)
    }
}

const Rsensor = (res) => {
    sensorModel.find({}).exec((error, data) => {
        if(!isNull(error)){
            res.status(500).send("error al mostrar los sensores")
        }else{
            res.status(200).send(data)
        }
    })  
}

const Usensor = (id, body, res) => {

    const sensor = new sensorModel(body)
    
    const joiErr = sensor.joiValidate(body)

    if(joiErr.hasOwnProperty('error')){
        res.status(400).send(joiErr.error.details)
    }else{
        sensorModel.findByIdAndUpdate(id,{
            $set:{
                temp            : body.temp,
                hum             : body.hum,
                anenoMeter      : body.anenoMeter,
                rain            : body.rain,
                lux             : body.lux,
                predictionState : false,
            },
        }, (error, doc) => {
            if(error){
                res.status(500).send("error en la actualizacion del sensor")
            }else{

                const now = new Date
                doc.tempHistory.valor.push(body.temp)
                doc.humHistory.valor.push(body.hum)
                doc.anenoMeterHistory.valor.push(body.anenoMeter)
                doc.rainHistory.valor.push(body.rain)
                doc.luxHistory.valor.push(body.lux)

                doc.tempHistory.date.push(now)
                doc.humHistory.date.push(now)
                doc.anenoMeterHistory.date.push(now)
                doc.rainHistory.date.push(now)
                doc.luxHistory.date.push(now)
                
                try{
                    doc.save()
                    res.status(200).send(doc)
                }catch(e){
                    res.status(500).send("error al actualizar el sensor")
                }
            }
        })
    }
}

const Dsensor = (id, res) => {
    sensorModel.findByIdAndDelete(id, (error, doc) => {
        if(error){
            res.status(500).send("error al eliminar el sensor")
        }else{
            res.status(200).send("eliminado")
        }
    })
}

const sensorId = (id, res) => {
    sensorModel.findById(id)
        .exec((error, data) => {
            if(error){
                res.status(500).send("error al buscar sensor")
            }else{
                res.status(200).send(data)
            }
        })
}

module.exports = {Csensor, Rsensor, Usensor, Dsensor, sensorId}