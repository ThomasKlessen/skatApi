const UserController = require('../../controller/userCtrl')

const postGetAll = (req, res) => {
        return UserController
            .getAll()
            .then(res.sendJson)
            .catch(res.sendError)
}

module.exports = postGetAll