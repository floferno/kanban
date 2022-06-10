const router = require('express').Router()
const TaskController = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', TaskController.getTasks)
router.post('/', TaskController.addTask)
router.get('/:id', TaskController.getTaskById)

router.put('/:id', authorization, TaskController.updateTask)
router.patch('/:id', authorization, TaskController.updateCategory)
router.delete('/:id', authorization, TaskController.deleteTask)

module.exports = router;