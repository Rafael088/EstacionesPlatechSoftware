const express = require("express") // libreria para realizar backend
const getFileNames = require("../utils/file/getFileNames")

const router = express.Router()

getFileNames(__dirname).forEach(name => {
    if(name !== 'index'){
        router.use(`/${name}`,require(`./${name}.js`))
    }
})


module.exports = router