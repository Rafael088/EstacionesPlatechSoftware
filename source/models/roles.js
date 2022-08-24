const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
    nameRol:[{
        type: String
    }],
    rolRouters:{
        type: Array,
    }
})

module.exports = mongoose.model('roles', rolesSchema, 'rol')

