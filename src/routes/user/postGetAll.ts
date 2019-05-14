import UserController from '../../controller/userCtrl'

/**
 * @name postGetAll
 * @param req express request object
 * @param res express response object
 * @description Get all users from database
 */

const postGetAll = (req:any, res:any) => {
        UserController
            .getAll()
            .then(res.sendJson)
            .catch(res.sendError)
}

export default postGetAll