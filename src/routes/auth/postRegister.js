const AuthController = require('../../controller/authCtrl')

const postRegister = (req, res) => {
    return AuthController
        .register(req.body.user)
        .then(res.sendJson)
        .catch(res.sendError)
}

module.exports = postRegister