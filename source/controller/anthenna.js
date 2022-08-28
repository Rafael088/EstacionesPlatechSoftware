const anthennaModel = require('../models/anthenna')
//Create
const Canthenna = async (body) => {
    const anthenna = await new anthennaModel(body)
    var err = anthenna.joiValidate(body)
    anthenna.save()
        .then (() => res.status(200).send(anthenna))
        .catch(() => {
            if(err.hasOwnProperty('error')){
                res.status(400).send(err.error.details)
            }else{
                res.status(500).send("ya existe la Antena Animal")
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

module.exports = {Canthenna, Ranthena, Uanthenna, Danthenna}