const sensorIndex = [
    {
        method  : "post",
        service : "Csensor"
    },
    {
        method  : "get",
        service : "Rsensor"
    },
    {
        method: "patch",
        service: "Usensor"
    },
    {
        method: "delete",
        service:"Dsensor"
    },
    {
        method  : "get",
        service : "sensorId"
    }
]

module.exports = sensorIndex