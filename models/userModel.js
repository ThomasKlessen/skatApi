'use strict';

const crypto = require('crypto');

class userModel {
    constructor (user) {
        this.user = user;
    }

    static getAll (db) {
        return db.any('SELECT * FROM users;')
    }

    static register (db, payload) {
        const { username, password } = payload
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
        return db.none('INSERT INTO users(username, hash, salt) VALUES($1, $2, $3)', [username, hash, salt])
    }
}

module.exports = userModel