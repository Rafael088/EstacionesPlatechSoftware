var express = require('express');
var router = express.Router();

const autoRouter = (indexer, services, middleware) => {
    indexer.forEach((value, index) => {
        if (Object.keys(value).length == 2){
            router?.[value.method]("/" + value.service,  (req, res) => services?.[value.service](req,res))
        }else{
            router?.[value.method]("/" + value.service,  middleware?.[value.middleware] ,(req, res) => services?.[value.service](req,res))
        }

    })

    return router
}

module.exports = autoRouter