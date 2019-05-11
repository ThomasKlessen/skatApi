const monitor = require('pg-monitor')

const postgresOptions = {
    capSQL: true,
    error(err, e) {
        monitor.error(err, e);
    }
}
monitor.attach(postgresOptions)

module.exports = postgresOptions;