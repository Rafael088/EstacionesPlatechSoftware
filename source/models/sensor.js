const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    TempActual:{
        type:Number
    },
    Temperatura:[{
        type: Number
    }],
    Origen:{
        type:String,
    }
})

module.exports = mongoose.model('sensorTemp', sensorSchema)

