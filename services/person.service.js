const pool = require('../database');
//только работа с базой данных и переменными-аргументами

class PersonService {

    async createPerson(arrayOfVar) {

        const { name, surname } = arrayOfVar;
        const newPerson = await pool.query('INSERT INTO persons (first_name, last_name) VALUES($1, $2) RETURNING *;', [name, surname]);

        return newPerson.rows[0];
    }

    async updatePerson(arrayOfVar) {

        const { id, name, surname } = arrayOfVar;
        const updatedPerson = await pool.query('UPDATE persons SET first_name=$1, last_name=$2 WHERE id=$3 RETURNING *;', [name, surname, id]);

        return updatedPerson.rows[0];
    }

    async deletePerson(id) {

        const deletedPerson = await pool.query('DELETE FROM persons WHERE id=$1;', [id]);

        return deletedPerson.rows[0];
    }

    async readPerson(id) {

        const readPerson = await pool.query('SELECT * FROM persons WHERE id=$1;', [id]);

        return readPerson.rows[0];
    }
}

module.exports = new PersonService();