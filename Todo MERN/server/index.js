const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const DBConnection = require('./database/db')
const router = require('./routes/Routes')


const app = express()
dotenv.config();



const PORT = process.env.PORT;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


//middlewares
app.use(cors())
app.use(express.json());
app.use('/',router);

DBConnection(USERNAME,PASSWORD);

app.listen(PORT,() =>{
    console.log('server is listened at port 8k');
})