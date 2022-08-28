const mongoose = require('mongoose')
const joi = require('joi')

const {sensorRules} = require("../rules/sensor");
const { ruleError } = require('../utils/error/ruleError');

const defaultRegistro = () => {}

const sensorSchema = mongoose.Schema({
    temp : {
        type : Number
    },
    tempHistory : {
        valor:[Number],
        date:[Date]
    },
    hum : {
        type : Number
    },
    humHistory : {
        valor:[Number],
        date:[Date]
    },
    anenoMeter : {
        type : Number
    },
    anenoMeterHistory : {
        valor:[Number],
        date:[Date]
    },
    rain : {
        type : Boolean
    },
    rainHistory : {
        valor:[Number],
        date:[Date]
    },
    lux :{
        type : Number
    },
    luxHistory: {
        valor:[Number],
        date:[Date]
    } 
},{versionKey : false})

sensorSchema.methods.joiValidate = (body) =>{

    const schema = joi.object({
        temp : joi.number()
               .min(0)
               .max(200)
               .required()
               .error(errs => ruleError(errs, sensorRules, 'temp')),
        
        hum : joi.number()
               .min(0)
               .max(100)
               .required()
               .error(errs => ruleError(errs, sensorRules, 'hum')),
        
        anenoMeter : joi.number()
               .min(0)
               .max(200)
               .required()
               .error(errs => ruleError(errs, sensorRules, 'anenoMeter')),

        rain : joi.boolean()
               .required()
               .error(errs => ruleError(errs, sensorRules, 'rain')),

        lux : joi.number()
               .min(0)
               .max(200)
               .required()
               .error(errs => ruleError(errs, sensorRules, 'lux')),
    })

    console.log(schema.validate(body))

    return schema.validate(body);
}

module.exports = mongoose.model('sensors', sensorSchema)