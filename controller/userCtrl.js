const userModel = require('../models/userModel')

const userController = {
    getAll (req, res) {
        userModel.getAll(req.db)
            .then(res.sendJson)
            .catch(res.sendError)
    }
}

module.exports = userController