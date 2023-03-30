const express = require('express')

const router = express.Router();
const todoController = require('../controller/todo-controller') 

const TodoItemModel = require('../models/TodoItems');

router.post('/add/item',todoController.addItem)

router.get('/get/item',todoController.getItem)

router.put('/update/item/:id',todoController.updateItem)

router.delete('/delete/item/:id',todoController.deleteItem);

module.exports = router;