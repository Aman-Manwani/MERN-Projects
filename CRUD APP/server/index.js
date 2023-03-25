const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const connection = require("./database/db");
const Routes = require('./routes/Route')
const cors = require('cors');

const app = express();  

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

   
dotenv.config();


const username = process.env.db_username;
const password = process.env.db_password;


app.use('/',Routes);
connection(username,password);
 
const PORT = 8000;

app.listen (PORT,()=>{
    console.log('server made successfully');
})

