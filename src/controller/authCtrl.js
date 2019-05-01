"use strict"
const userModel = require('../models/userModel')

const authCtrl = {

    register (req, res) {
        userModel
            .register(req.body.user)
            .then(res.sendJson)
            .catch(res.sendError)
    },

    login (req, res) {
        userModel
            .login(req.body.user)
            .then(res.sendJson)
            .catch(res.sendError)
    },

}

module.exports = authCtrl
