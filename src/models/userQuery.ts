const userQuery = {
    getUserByName: `SELECT * FROM users WHERE username = $1;`,
    getAllUsers: `SELECT * FROM users;`,
    register: `INSERT INTO users(username, hash, salt) VALUES($1, $2, $3);`
}

export default userQuery