const express = require('express');
const router = require('./routes/route.js')
const cors = require('cors')
const DBConnection = require('./database/db.js')
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = process.env.PORT;

//middlewares
app.use(cors());
app.use('/',router);

DBConnection(username,password);



app.listen(PORT,()=>{
    console.log('server is running at port 8k');
})