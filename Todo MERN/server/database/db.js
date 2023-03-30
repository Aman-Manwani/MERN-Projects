const mongoose = require('mongoose');


const DBConnection = async(USERNAME,PASSWORD) => {
    const DB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.k5ilgup.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(DB_URL);
        console.log('successfully connected to the database');
    }catch(error){
        console.log('error in connecting db from db.js');
    }
}

module.exports = DBConnection;