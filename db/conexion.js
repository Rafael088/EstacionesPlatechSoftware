const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/dbiachec');

const objetobd = mongoose.connection;
objetobd.on('connected', ()=>{console.log('Conexión exitosa')});

objetobd.on('error', ()=>{console.log('Conexión fallida')});

module.exports = mongoose