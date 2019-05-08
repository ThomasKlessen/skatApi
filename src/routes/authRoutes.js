const router = require('express').Router();
const AuthController = require('../controller/authCtrl')

router.post('/login', (req, res) => {
    AuthController
        .login(req.body.user)
        .then(res.sendJson)
        .catch(res.sendError)
});

router.post('/register', (req, res) => {
    AuthController
        .register(req.body.user)
        .then(res.sendJson)
        .catch(res.sendError)
});

module.exports = router;