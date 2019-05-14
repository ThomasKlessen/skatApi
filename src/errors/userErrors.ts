/**
 * @class UserError
 * @description For all userErrors
 */

class UserError extends Error {
    /**
     * @constructor
     * @param msg
     */
    constructor(msg: string) {
        super(msg)
    }
}

export default UserError