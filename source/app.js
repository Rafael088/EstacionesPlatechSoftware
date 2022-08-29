require("dotenv").config()

var express    = require("express");
var bodyParser = require("body-parser");
const dbConnect = require("./config/mongo");
var app = express();

dbConnect()

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())


app.use("/api", require("./routes"))

app.listen(3000, () => {
    console.log("app running on port 3000")
})
