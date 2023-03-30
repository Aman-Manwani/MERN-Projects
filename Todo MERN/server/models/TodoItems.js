const mongoose = require('mongoose')

const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true,
    }
})

const TodoItemModel = mongoose.model('TodoItemModel',TodoItemSchema);

module.exports = TodoItemModel;