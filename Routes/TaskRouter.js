const { createTask, fetchAllTasks, updateTaskById, deleteTaskById } = require('../Controllers/taskController');


const router = require('express').Router();

//to get all the tasks
router.get('/',fetchAllTasks)

//to create tasks
router.post('/',createTask)

//to update tasks
router.put('/:id',updateTaskById)

//to delete tasks
router.delete('/:id',deleteTaskById)





module.exports = router