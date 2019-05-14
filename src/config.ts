// You should use environment parameters to setup your config to be prepared for scaling!


const postgres:any = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'YOUR_DB_Name',
    user: process.env.DB_USER || 'YOUR_DB_User',
    password: process.env.DB_PASSWORD || 'YOUR_DB_Password',
}


const config = {
    postgres,
    jwtSecret: process.env.JWT_SECRET || 'YOUR_JWT_SECRET'
}

export default config