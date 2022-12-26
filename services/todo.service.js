const pool = require('../database');


class TodoService {

    async createTodo(arrayOfVar, person_id) {

        const { todo, isdone } = arrayOfVar;
        const newTodo = await pool.query('INSERT INTO todos (person_id, todo, isdone) VALUES($1, $2, $3) RETURNING *;', [person_id, todo, isdone]);

        return newTodo.rows[0];
    }

    async updateTodo(arrayOfVar) {

        const { todo_id, todo, isdone } = arrayOfVar;
        const updatedTodo = await pool.query('UPDATE todos SET todo = $1, isdone = $2 WHERE todo_id = $3 RETURNING *;', [todo, isdone, todo_id]);

        return updatedTodo.rows[0];
    }

    async deleteTodo(todo_id) {

        const deletedTodo = await pool.query('DELETE FROM todos WHERE todo_id=$1;', [todo_id]);

        return deletedTodo.rows[0];
    }

    async readTodo(todo_id) {

        const readTodo = await pool.query('SELECT * FROM todos WHERE todo_id=$1;', [todo_id]);

        return readTodo.rows[0];
    }
}

module.exports = new TodoService();