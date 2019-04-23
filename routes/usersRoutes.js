const router = require('express').Router()
const UserController = require('../controller/userCtrl')

router.post('/', UserController.getAll);

module.exports = router;
