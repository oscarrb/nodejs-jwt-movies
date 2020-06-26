const router = require('express').Router()
const authMiddleware = require('../../middlewares/auth')
const corsMiddleware = require('../../middlewares/cors')
const auth = require('./auth')
const user = require('./user')
const favourite = require('./favourite')

router.use(corsMiddleware);

router.use('/auth', auth)
router.use('/user', authMiddleware)
router.use('/user', user)
router.use('/favourite', authMiddleware)
router.use('/favourite', favourite)

module.exports = router