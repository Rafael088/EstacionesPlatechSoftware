const indexServices = [
    {
        method:"get",
        service:"getSensorData",
        middleware:"printNumber"
    },
    {
        method:"post",
        service:"getSms",
    }, 
    {
        method:"get",
        service:"getSensorsOrigen",
    }
]

module.exports = indexServices