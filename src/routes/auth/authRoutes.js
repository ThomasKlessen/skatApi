const router = require('express').Router();
const postLogin = require('./postLogin')
const postRegister = require('./postRegister')

router.post('/login', postLogin);

router.post('/register', postRegister);

module.exports = router;