"use strict"
const userModel = require('../models/userModel')

const authCtrl = {
    register (user) {
        return userModel
            .register(user)

    },

    login (user) {
        return userModel
            .login(user)
    },

}

module.exports = authCtrl
