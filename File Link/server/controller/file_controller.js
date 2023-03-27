const imagemodel = require('../models/file-schema')

const uploadFile = async(req,res) => {
    const fileObj = {
        path : req.file.path,
        name : req.file.originalname,
    }
    try{
        const file = await imagemodel.create(fileObj);
        // console.log(file);
        res.status(200).json({
            path: `http://localhost:8000/imagemodel/${file._id}`,
        })
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({
            error:error.message,
        })
    }
}

const downloadImage = async(req,res) => {
    try{
        const fileit = await imagemodel.findById(req.params.id);
        console.log(fileit);

        fileit.downloadContent++;

        await fileit.save();

        res.download(fileit.path,fileit.name);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({
            error:error.message,
        })
    }
}

module.exports = {uploadFile,downloadImage};