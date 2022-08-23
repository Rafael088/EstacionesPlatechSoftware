
const express = require('express');

const bodyParser = require('body-parser');
const router = express.Router();
const  mongoose  = require('mongoose');
const eschema = mongoose.Schema;

const eschemaUsuario = new eschema({
    name: String,
    email: String,
    user: String,
    password: String,
    rol: String,
    id: String
})
const ModeloUsuario = mongoose.model('usuarios', eschemaUsuario);
module.exports = router

router.post('/agregarUsuario', (req, res)=>{
    const nuevoUsuario = new ModeloUsuario({
        
        name: req.data.name,
        email: req.body.email,
        user: req.body.user,
        password: req.body.password,
        rol: req.body.rol,
        id: req.body.id,
    })
    nuevoUsuario.save(function(err){
        if(!err){
            res.send('Usuario Agregado correctamente')
        }else{
            res.send(err)
        }
    })
})