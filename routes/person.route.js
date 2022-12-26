//только роуты
const personController = require('../controllers/person.controller.js');

const express = require('express');
const router = express.Router();

router.get('/:pid', personController.readPerson);

router.post('/', personController.createPerson);

router.put('/', personController.updatePerson);

router.delete('/:pid', personController.deletePerson);


module.exports = router;