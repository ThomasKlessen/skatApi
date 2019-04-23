const userModel = require('../models/userModel')

const getAll = function (req, res, next) {
    userModel.getAll(req.db)
        .then(res.sendJson)
        .catch(res.sendError)
}

const register = function (req, res) {
    userModel
        .register(req.db, req.body)
        .then(res.sendJson)
        .catch(res.sendError)
}

const logout = function (req, res, next) {
    return true
}

const login = function (req, res, next) {
    return true
}

const userController = {
    getAll,
    register,
    login,
    logout
}

module.exports = userController