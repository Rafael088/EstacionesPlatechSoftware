const express = require("express") // libreria para realizar backend
const fs = require("fs") // hacer operacion sobre librerias folders lectura, escritura, moverlos y eliminarlos

const router = express.Router()

const PATH_ROUTES = __dirname // c:// usuarios/por pwd

// remover la extesion user.json -> user
const removeExtension = (filename) => {
    return filename.split('.').shift();
}

//[ user.js, points.js, prediction.js]

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)
    if(name !== 'index'){
        router.use(`/${name}`,require(`./${name}.js`))
    }
})

module.exports = router