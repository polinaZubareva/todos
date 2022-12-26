//только работа с запросами и ответами
const personService = require('../services/person.service.js');

class PersonController {
    async createPerson(req, res) {

        const person = await personService.createPerson(req.body);

        res.status(200).json(person);
    }

    async deletePerson(req, res) {

        const id = req.params.pid;
        const person = await personService.deletePerson(id);

        if (!person)
            res.json('Successful deleting');
        else res.json(person);
    }

    async updatePerson(req, res) {

        const person = await personService.updatePerson(req.body);

        res.json(person);
    }

    async readPerson(req, res) {

        const id = req.params.pid;
        if (!id)
            res.status(400).json({ message: 'ID is not existing' });
        const person = await personService.readPerson(id);

        res.json(person);
    }

}

module.exports = new PersonController();