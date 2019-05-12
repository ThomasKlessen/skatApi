const UserController = require('../../controller/userCtrl')

/**
 * @name postGetAll
 * @param req express request object
 * @param res express response object
 * @description Get all users from database
 */

const postGetAll = (req, res) => {
        UserController
            .getAll()
            .then(res.sendJson)
            .catch(res.sendError)
}

module.exports = postGetAll