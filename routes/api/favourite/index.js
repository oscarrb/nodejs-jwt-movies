const router = require('express').Router()
const controller = require('./favourite.controller')

router.get('/list', controller.list)
router.post('/add/:imdbID', controller.add)

module.exports = router