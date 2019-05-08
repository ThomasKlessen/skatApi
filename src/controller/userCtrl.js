const userModel = require('../models/userModel')
const dbError = require('../errors/dbErrors')
const userError = require('../errors/userErrors')

const userController = {
    getAll () {
        return userModel
            .getAll()
            .catch(err => {
                if (err instanceof dbError) {
                    return Promise.reject(err)
                } else {
                    return Promise.reject(new userError('Fehler in der Logik'))
                }
            })
    }
}

module.exports = userController