const userModel = require("../models/user")
const bcrypt = require('bcrypt')
const jose = require('jose')
require("dotenv").config() 

const oauth = (body,res) => {

    userModel.findOne({
        email : body.email
        },(error, doc) => {
            const equal = bcrypt.compareSync(body.passwd, doc.passwd)

            if(equal){
                
                const secret = new TextEncoder().encode(
                    process.env.JWT_SECRET
                  );
                
                  const jwt =  new jose.SignJWT({doc})
                    .setProtectedHeader({ alg: "HS256" })
                    .setExpirationTime('8h')
                    .sign(secret);
                  
                  jwt.then((data) => res.send('Bearer ' + data))
            }else{
                res.send("no puede ingresar")
            }
        })
}

const token = (req, res, next) => {

    
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        const secret = new TextEncoder().encode(
            process.env.JWT_SECRET
        );
    
        console.log(token)
        console.log(secret)

        try {
            
            const jwtVerification = jose.jwtVerify(token, secret)

            jwtVerification.then(data => console.log(data))

            console.log("Token valido")
            
          } catch (e) {
            res.send("Token invalido");
          }
        
          next()
    }catch(e){
        res.status(500).send("no se presento toquen")
    }
}


module.exports = {oauth, token}

