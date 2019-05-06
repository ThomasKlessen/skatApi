class UserError extends Error {
    constructor(msg) {
        super(msg)
        this.type = 'UserError'
    }
}

module.exports = UserError