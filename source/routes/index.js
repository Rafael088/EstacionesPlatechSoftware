const express = require("express") // libreria para realizar backend
const getFileNames = require("../utils/file/getFileNames")
const autoRouter = require('../utils/autoRouter/autoRouter')

const router = express.Router()

getFileNames(process.env.PROJECT_DIR + '/indexers').forEach(name => {
    if(name !== 'index'){
        router.use(`/${name}`,require(`./${name}.js`))
    }
})

module.exports = router