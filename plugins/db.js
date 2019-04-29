const initOptions = {
    capSQL: true,
    connect () {
        console.log('DB connected')
    },
    disconnect () {
        console.log('DB disconnected')
    }
};
const pgp = require('pg-promise')(initOptions);
const config = require('../config')

const db = pgp(config.postgres);

const dbMiddleWare = function (req, res, next) {
    req.db = db;
    next();
}

module.exports = {
    dbMiddleWare,
    db
}