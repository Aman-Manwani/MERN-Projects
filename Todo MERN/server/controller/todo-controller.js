const TodoItemModel = require('../models/TodoItems')

const addItem = async(req,res) =>{
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
}

const getItem = async(req,res)=>{
    try{
        const allTodoItems = await TodoItemModel.find({});
        res.status(200).json(allTodoItems);
    }catch(err){
        console.log(err.message);
        res.json(err);
    }
}

const updateItem = async (req,res) => {
    try{
        const updateTodo = await TodoItemModel.findByIdAndUpdate(req.params.id,{$set: req.body})
        res.status(200).json('updated successfully');
    }
    catch(err){
        console.log(err.message);
        res.json(err)
    }
}

const deleteItem = async (req,res)=>{
    try{
        const deletedItem = await TodoItemModel.findByIdAndDelete(req.params.id);
        res.status(200).json('deleted successfully');
    }
    catch(err){
        console.log(err);
        res.json(err);
    }
}

module.exports = {addItem,getItem,updateItem,deleteItem};