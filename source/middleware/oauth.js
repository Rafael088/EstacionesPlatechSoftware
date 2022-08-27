const OAuth = (req, res, next) => {
  
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        const secret = new TextEncoder().encode(
            process.env.JWT_SECRET
        );
    
        try {

            jose.jwtVerify(token, secret)
            .then(data => next())
            .catch((error) => res.status(400).send("token invalido"))

            
          } catch (e) {
            res.send("Token invalido");
          }
    }catch(e){
        res.status(500).send("no se presento token")
    }
}

module.exports = {OAuth}