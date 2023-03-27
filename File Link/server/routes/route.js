const express = require('express');
const file_controller = require('../controller/file_controller.js');
const upload = require('../utils/upload')
// const downloadImage = require('../controller/file_controller')

const router = express.Router(); 

router.post('/upload',upload.single('file') , file_controller.uploadFile)
router.get('/imagemodel/:id',file_controller.downloadImage);

module.exports = router;