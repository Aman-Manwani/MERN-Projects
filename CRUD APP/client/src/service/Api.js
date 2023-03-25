import axios from 'axios'

// backend url
const url = 'http://localhost:8000';
   
const AddUser = async(data) =>{
    try{
        console.log('hiii from api.js');
        return await axios.post(`${url}/add`,data)
    }
    catch(error){
        console.log('error while calling add user from api.js')
    }
}

// const getUsers = async() => {
//     try{
//         return await axios.get(`${url}/all`);
//     }
//     catch(error){
//         console.log('error in getusers')
//     }
// }

export  {AddUser};  