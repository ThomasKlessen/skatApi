const router = require('express').Router()
const postGetAll = require('./postGetAll')

router.post('/getAll', postGetAll);

module.exports = router;
