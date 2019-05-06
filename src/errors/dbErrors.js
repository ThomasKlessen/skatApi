class DbError extends Error {
    constructor() {
        super('DatabaseError')
        this.type = 'POSTGRES_ERROR'
    }
}

module.exports = DbError