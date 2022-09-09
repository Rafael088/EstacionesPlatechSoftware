const anthennaModel = require('../models/anthenna')
const aiMotorModel = require('../models/aiMotor')
//Create
const Canthenna = async (body ,res) => {
    const anthenna = await new anthennaModel(body)
    
    //var err = anthenna.joiValidate(body)
    const err = {}
    
    anthenna.save()
        .then (() => res.status(200).send(anthenna))
        .catch(() => {
            if(err.hasOwnProperty('error')){
                res.status(400).send(err.error.details)
            }else{
                res.status(500).send("ya existe la Antena")
            }})
}

//Read
const Ranthena = async (res) => {
    await anthennaModel.find({}).exec((error, data) => {
        if(!error){
            res.status(200).send(data)
        }else{
            res.status(500).send(" error al buscar la antena")
        }
    })
}

//Update

const Uanthenna = async (id, body, res) => {
    await anthennaModel.findByIdAndUpdate(
        id,
        {$set:body},
        (error, data) => res.send(data)
    )
}

//Delete

const Danthenna = async (id, res) => {
    await anthennaModel.findByIdAndDelete(
        id,
        (error, data) => res.send(data)
    )
}

//AddSensor
const RiaAnthe = async (id, res) => {

    const anthe = await anthennaModel.findById(id)
    aiMotorModel.find(anthe.aiMotor,  (error, data) => {
        if(!error){
            res.status(200).send(data)
        }else{
            res.status(500).send(" error")
        }
    })
}

const GanthennaLotLat = (body, res) => {
    
    const lon = body.lng.toString()
    const lat = body.lat.toString()

    anthennaModel.find({ubication:{
        latitud : lat,
        longitud: lon,
    }}).exec((error, data) => {
        if(error){
            res.status(500).send("error al buscar la antena")
        }else{
            res.status(200).send(data)
        }
    })
}

module.exports = {Canthenna, Ranthena, Uanthenna, Danthenna, RiaAnthe, GanthennaLotLat}