const aiMotorModel = require('../models/aiMotor')

//Create

const CaiMotor = async (body) => {
    const aiMotor = await new aiMotorModel(body)
    var err = aiMotor.joiValidate(body)
    aiMotor.save()
     .then(() => resizeBy.status(200).send(aiMotor))
     .catch(() => {
        if(err.hasOwnProperty('error')){
            res.status(400).send(err.error.details)
        }else{
            res.status(500).send("ya existe la IA Animal")
        }
     })
}

//Read

const RaiMotor = async (res) => {
    await aiMotorModel.find({}).exec((error, data) => {
        if(!error){
            res.status(200).send(data)
        }else{
            res.status(500).send(" error al buscar la IA")
        }
    })
}

//Update

const UaiMotor = async (id, body, res) => {
    await aiMotorModel.findByIdAndUpdate(
        id,
        {$set:body},
        (error, data) => res.send(data)
    )
}

//Delete

const DaiMotor = async (id, res) => {
    await aiMotorModel.findByIdAndDelete(
        id,
        (error, data) => res.send(data)
    )
}

module.exports = {CaiMotor, RaiMotor, UaiMotor, DaiMotor}