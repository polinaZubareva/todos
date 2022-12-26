//только работа с запросами и ответами
const todoService = require('../services/todo.service.js');

class TodoController {

    async createTodo(req, res) {
        const personId = req.originalUrl.split('/')[2]; //странно
        const todo = await todoService.createTodo(req.body, personId);

        res.status(200).json(todo);
    }

    async deleteTodo(req, res) {

        const id = req.params.todoid;
        const todo = await todoService.deleteTodo(id);

        res.json(todo);
    }

    async updateTodo(req, res) {

        const todo = await todoService.updateTodo(req.body);

        res.json(todo);
    }

    async readTodo(req, res) {

        const id = req.params.todoid;
        if (!id)
            res.status(400).json({ message: 'ID is not existing' });
        const todo = await todoService.readTodo(id);

        res.json(todo);
    }

}

module.exports = new TodoController();