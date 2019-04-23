const defaultPort = 5432;
const defaultHost = 'localhost';

const config = {
    postgres: {
        host: process.env.DB_HOST || defaultHost,
        port: process.env.DB_PORT || defaultPort,
        database: process.env.DB_NAME || 'YOUR_DB_Name',
        user: process.env.DB_USER || 'YOUR_DB_User',
        password: process.env.DB_PASSWORD || 'YOUR_DB_Password',
    }
}

module.exports = config