/**
 * @class UserError
 * @description For all userErrors
 */

class UserError extends Error {
    /**
     * @constructor
     * @param msg
     */
    constructor(msg) {
        super(msg)
        this.type = 'UserError'
    }
}

module.exports = UserError