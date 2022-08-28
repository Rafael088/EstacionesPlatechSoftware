const sensorRules = {
    temp : {
        "number.min"   : "temperatura fuera de rango de medida",
        "number.max"   : "temperatura fuera de rango de medida",
        "any.required" : "la temperatura es requerida",
        "any.empty"    : "la temperatura es requerida"
    },
    hum : {
        "number.min"   : "temperatura fuera de rango de medida",
        "number.max"   : "humedad fuera de rango de medida",
        "any.required" : "la humedad es requerida",
        "any.empty"    : "la humedad es requerida"
    },
    anenoMeter : {
        "number.min"   : "velocidad del viento fuera de rango de medida",
        "number.max"   :  "velocidad del viento fuera de rango de medida",
        "any.required" : "la velocidad del viento es requerida",
        "any.empty"    : "la velocidad del viento es requerida"
    },
    rain :{
        "any.required" : "la lluvia del viento es requerida",
        "any.empty"    : "la lluvia del viento es requerida"
    },
    lux : {
        "number.min"   : "luminocidad fuera de rango de medida",
        "number.max"   :  "luminocidad del viento fuera de rango de medida",
        "any.required" : "luminocidad es requerida",
        "any.empty"    : "luminocidad es requerida"
    },
}

module.exports = {sensorRules}