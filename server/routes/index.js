const router = require('express').Router()
const TaskRouter = require('./taskRouter')
const UserRouter = require('./userRouter')

router.use('/users', UserRouter)
router.use('/tasks', TaskRouter)

module.exports = router;