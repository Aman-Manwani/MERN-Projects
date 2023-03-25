const mongoose = require('mongoose')
// const autoIncrement = require('mongoose-auto-increment');

const userSchema = mongoose.Schema({
    name:{type:String},
    username:{type:String},
    email:{type:String},
    phone:{type:String},
});

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin,'userModel')

const userModel = mongoose.model('userModel',userSchema);

module.exports = userModel;