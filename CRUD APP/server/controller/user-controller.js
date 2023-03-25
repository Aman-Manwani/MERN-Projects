const userModel = require('../schema/user-schema');



const addUser = async(req,res)=>{
        console.log(req.body);
        const user = req.body;
        let data = await userModel.create(user);
        res.status(200).json({
            data:data,
            message:'added successfully',
        })
}

// const getUser = async(req,res) => {
//         const data = await userModel.find({})
//         res.status(200).json({data});
// }

module.exports = {addUser};