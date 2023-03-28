const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const DBConnection = require('./database/db')

const app = express()
dotenv.config();

const PORT = process.env.PORT;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

//middlewares
app.use(cors())

DBConnection(USERNAME,PASSWORD);

app.listen(PORT,() =>{
    console.log('server is listened at port 8k');
})