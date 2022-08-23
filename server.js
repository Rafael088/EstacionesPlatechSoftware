const express = require('express')

const bodyParser = require('body-parser');
const archivoBD = require('./db/conexion.js');
const port = 5000;
const rutaUsuario = require('./router/usuarios.js')
const app = express();

app.use('/api/usuario', rutaUsuario)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))