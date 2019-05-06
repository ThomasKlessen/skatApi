const router = require('express').Router()
const UserController = require('../controller/userCtrl')

router.post('/getAll', (req, res) => {
    UserController
        .getAll()
        .then(res.sendJson)
        .catch(res.sendError)
});

module.exports = router;
