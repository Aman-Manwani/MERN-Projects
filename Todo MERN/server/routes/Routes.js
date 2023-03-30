const express = require('express')

const router = express.Router();

const TodoItemModel = require('../models/TodoItems');

router.post('/add/item',async(req,res) =>{
    try{
        const newItem = new TodoItemModel({
            item:req.body.item,
        })
        const saveItem = await newItem.save();
        res.status(200).json(saveItem);
    }catch(err){
        console.log(err.message);
        res.json(err);
    }
})

router.get('/get/item',async(req,res)=>{
    try{
        const allTodoItems = await TodoItemModel.find({});
        res.status(200).json(allTodoItems);
    }catch(err){
        console.log(err.message);
        res.json(err);
    }
})

router.put('/update/item/:id',async (req,res) => {
    try{
        const updateTodo = await TodoItemModel.findByIdAndUpdate(req.params.id,{$set: req.body})
        res.status(200).json('updated successfully');
    }
    catch(err){
        console.log(err.message);
        res.json(err)
    }
})

router.delete('/delete/item/:id',async (req,res)=>{
    try{
        const deletedItem = await TodoItemModel.findByIdAndDelete(req.params.id);
        res.status(200).json('deleted successfully');
    }
    catch(err){
        console.log(err);
        res.json(err);
    }
})

module.exports = router;