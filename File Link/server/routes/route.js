const express = require('express');
const uploadFile = require('../controller/file_controller.js');

const router = express.Router(); 

router.post('/upload',uploadFile)

module.exports = router;