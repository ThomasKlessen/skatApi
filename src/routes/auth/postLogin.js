const AuthController = require('../../controller/authCtrl')

const postLogin = (req, res) => {
     console.log(req.body)
     AuthController
        .login(req.body.user)
        .then(res.sendJson)
        .catch(res.sendError)
}

module.exports = postLogin