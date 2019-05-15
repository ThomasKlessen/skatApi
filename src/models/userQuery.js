const userQuery = {
    getUserByName: `SELECT * FROM users WHERE username = $1;`,
    getAllUsers: `SELECT * FROM users;`,
    createUser: `INSERT INTO users(username, hash, salt) VALUES($1, $2, $3);`
}

module.exports = userQuery