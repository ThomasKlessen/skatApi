'use strict';
const {db} = require('../plugins/db')
const crypto    = require('crypto');
const jwt      = require('jsonwebtoken');
const config = require('../config')

class userModel {
    constructor (user) {
        this.user = user;
    }

    static getAll () {
        return db.any('SELECT * FROM users;')
    }

    static login ({username, password}) {
        return db
            .one("SELECT * FROM users WHERE username = $1", [username])
            .then(user => {
                const token = jwt.sign(user, config.jwtSecret);
                const hash = crypto.pbkdf2Sync(password, user.salt, 10000, 512, 'sha512').toString('hex');
                if (hash === user.hash) {
                    return Promise.resolve({token, user})
                } else {
                    return Promise.reject({msg: 'wrong'})
                }
            })

    }

    static register (payload) {
        const { username, password } = payload
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
        return db.none('INSERT INTO users(username, hash, salt) VALUES($1, $2, $3)', [username, hash, salt])
    }
}

module.exports = userModel