var express = require('express');
var router = express.Router();
const url = require('url')
var services =  require('../services/sensor')
var servicesIndex = require('../services/index')

servicesIndex.forEach((value, index) => {
    router?.[value.method]("/" + value.service, 
                            (req, res) => services?.[value.service](req,res))
})

module.exports = router