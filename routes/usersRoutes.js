const router = require('express').Router()
const UserController = require('../controller/userCtrl')

router.post('/getAll', UserController.getAll);

module.exports = router;
