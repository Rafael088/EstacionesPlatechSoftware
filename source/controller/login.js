const userModel = require("../models/user")
const bcrypt = require('bcrypt')

const oauth = (body,res) => {

    userModel.findOne({
        email : body.email
        },(error, doc) => {
            const equal = bcrypt.compareSync(body.passwd, doc.passwd)

            if(equal){
                res.send("puede ingresar")
            }else{
                res.send("no puede ingresar")
            }
        })
}

module.exports = {oauth}

