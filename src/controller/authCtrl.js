"use strict"
const userModel = require('../models/userModel')
const errorCodes = require('../errors/errorCodes')
const jwt      = require('jsonwebtoken');
const config = require('../config')
const crypto = require('../middleware/crypto/crypto')

const authCtrl = {
    register (user) {
        const { username, password } = user
        const salt = crypto.generateSalt()
        const hash = crypto.getHash(password, salt)

        return userModel
            .createUser({
                username,
                salt,
                hash
            })
    },

    login ({username, password}) {
        return userModel
                .getUserByName(username)
                .then(user => {
                    const hash = crypto.getHash(password, user.salt)
                    if (hash === user.hash) {
                        const token = jwt.sign(user, config.jwtSecret);
                        return Promise.resolve({token, user})
                    } else {
                        return Promise.reject(errorCodes.USER_NOT_FOUND)
                    }
                })
    }

}

module.exports = authCtrl