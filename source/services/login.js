const loginController = require("../controller/login")

const oauth = (req, res) => {
    loginController.oauth(req.body, res)
}

module.exports = {oauth}