const userModel = require('../models/userModel')

const userController = {
    getAll () {
        return userModel
            .getAll()
    }
}

module.exports = userController