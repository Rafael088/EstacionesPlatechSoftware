const controllerUser = require('../controller/user')
const {onError} = require('../utils/error/errorHandler')

const Cuser = (req, res) => {
    const {user, error} = controllerUser.Cuser(req.body)
    onError(res, user, error)
}

module.exports = {Cuser}
