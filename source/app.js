require("dotenv").config()

var express    = require("express");
var bodyParser = require("body-parser");
const dbConnect = require("./config/mongo")

var app = express();

app.use(bodyParser.urlencoded({extended : false}))
app.use("", require("./routes"))

dbConnect()

app.listen(3000, () => {
    console.log("app running on port 3000")
})