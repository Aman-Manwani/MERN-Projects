import React from 'react'
import './AllUsers.css'
// import { getUsers } from '../../service/Api'
// import { useEffect } from 'react'

function AllUsers() {

  // useEffect(()=>{
  //   getallusers();
  // },[]);

  // const getallusers = async() => {
  //   await getUsers();
  // }

  return (
    <div className='parent'>
      hello from allusers 
      {/* <table className='allusers'>
        <tr className='table_headings'>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        <tr className='table_row'>
          <td>Id</td>
          <td>Name</td>
          <td>Username</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        
      </table> */}
    </div>
  )
}

export default AllUsers
