const mongoose = require('mongoose');

const anthennaSchema = new mongoose.Schema({
    name:{
        type:String
    },
    status:{
        type:String
    },
    idSensors:{
        type:String,
        unique   : true
    },
    ubication:{
        latitud:{
            type: String
        },
        longitud:{
            type: String
        }
    },
    aiMotor:{
        type:String
    },
    electStatus:{
        type: Boolean
    }
}, {versionKey:false})

module.exports = mongoose.model('anthenna', anthennaSchema, 'anthenna')