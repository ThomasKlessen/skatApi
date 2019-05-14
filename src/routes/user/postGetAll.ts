import UserController from '../../controller/userCtrl'
import express from 'express'

/**
 * @name postGetAll
 * @param req express request object
 * @param res express response object
 * @description Get all users from database
 */

const postGetAll = (req:express.Request, res:express.Response) => {
        UserController
            .getAll()
            .then(res.sendJson)
            .catch(res.sendError)
}

export default postGetAll