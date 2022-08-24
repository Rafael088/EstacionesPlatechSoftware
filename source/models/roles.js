const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
    idRol:{
        type:Number
    },
    nameRol:[{
        type: String
    }],
    rolRouters:{
        type: Array,
    }
})

module.exports = mongoose.model('rolesTemp', rolesSchema)

