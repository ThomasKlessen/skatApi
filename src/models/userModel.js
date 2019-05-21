'use strict';
const db = require('../middleware/postgres/postgres')
const userQuery = require('./userQuery')
const errorCodes = require('../errors/errorCodes')
const ApiError = require('../errors/apiError')

class userModel {
    static getAll () {
        return db.any(userQuery.getAllUsers)
    }

    static getUserByName (username) {
        return db
            .one(userQuery.getUserByName, [username])
            .catch(() => Promise.reject(new ApiError(errorCodes.USER_NOT_FOUND)))
    }

    static createUser (payload) {
        const {username, hash, salt} = payload
        return db
            .none(userQuery.createUser, [username, hash, salt])
            .catch(() => Promise.reject(new ApiError(errorCodes.USER_NOT_CREATED)))
    }
}

module.exports = userModel