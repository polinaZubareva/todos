//только роуты
const todoController = require('../controllers/todo.controller.js');

const express = require('express');
const router = express.Router();

router.get('/:todoid', todoController.readTodo);

router.post('/', todoController.createTodo);

router.put('/', todoController.updateTodo);

router.delete('/:todoid', todoController.deleteTodo);


module.exports = router;