import React from 'react'
import './AddUsers.css'
import { useState } from 'react'
import {AddUser} from '../../service/Api'

const defaultValue = {
  name:'',
  username:'',
  email:'',
  phone:'',
}

function AddUsers() {
  const [user,setuser] = useState(defaultValue);
  
  const onValueChange = (e)=>{
    setuser({...user,[e.target.name] : e.target.value});
  }    
  const addUserOn = () =>{
    console.log('user')
    AddUser(user)
    alert('user registered successfully');
  }
  return (
    <div className='form'>
      <h1>Add Users</h1>
      <div className='input_fields'>
        <input type='text' name='name' onChange={onValueChange} placeholder='Enter Your Name'></input>
        <input name='username' type='text' onChange={onValueChange} placeholder='Enter Username'></input>
        <input name='email' type='email' onChange={onValueChange} placeholder='Enter Email'></input>
        <input name='phone' type='number' onChange={onValueChange} placeholder='Enter Your Phone Number'></input>
      </div>
      <div className='submit_btn'>
        <button onClick={addUserOn} className='add_btn'>Add User</button>
      </div>
    </div>
  )
}

export default AddUsers
