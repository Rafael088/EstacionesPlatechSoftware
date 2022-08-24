var express = require('express');
var router = express.Router();

const autoRouter = (indexer, services) => {
    indexer.forEach((value, index) => {
        router?.[value.method]("/" + value.service, 
                                (req, res) => services?.[value.service](req,res))
    })

    return router
}

module.exports = autoRouter