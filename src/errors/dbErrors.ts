class DbError extends Error {
    constructor(msg: string) {
        super(msg)
    }
}

export default DbError