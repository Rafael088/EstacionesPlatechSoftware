const mongoose = require('mongoose');

const aiMotorSchema = new mongoose.Schema({
    nameModel:{
        type:String
    },
    directionModel:{
        type:String
    },
    predictionHistory:{
        type: Number
    },
    uncertainty:{
        type:String
    }
}, {versionKey:false})

module.exports = mongoose.model('aiMotor', aiMotorSchema, 'aiMotor')