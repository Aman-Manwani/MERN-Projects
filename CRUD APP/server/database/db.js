const mongoose = require("mongoose");

const connection = async(username,password) =>{
    const db_url = `mongodb+srv://${username}:${password}@cluster0.sb6bmpl.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(db_url)
        console.log('db connected')
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports = connection;