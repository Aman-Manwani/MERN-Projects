const mongoose = require('mongoose')

const DBConnection = async(username,password) => {
    const DB_URL = `mongodb+srv://${username}:${password}@filelink.e31pq71.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(DB_URL);
        console.log('successfully connected to database through url')
    }
    catch(error){
        console.log('error in connection db from db.js')
    }
} 

module.exports = DBConnection;