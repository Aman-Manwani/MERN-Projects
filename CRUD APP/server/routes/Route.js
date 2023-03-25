const express = require('express')
const addUser = require('../controller/user-controller')
// const getUser = require('../controller/user-controller')
const router = express.Router();


router.post('/add',addUser);
// router.get('/all',getUser);


module.exports = router;