import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios'


function App() {

  const URL = 'http://localhost:8000';

  const [itemText,setItemText] = useState('');
  const [listItems,setListItems] = useState([]);
  const [isUpdating,setIsUpdating] = useState('');

  const addItem = async(e) =>{
    e.preventDefault();
    try{
      const response = await axios.post(`${URL}/add/item`,{item: itemText})
      setListItems(prev=>[...prev,response.data]);
      setItemText('');
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    const getItems = async() => {
      try{
        const response = await axios.get(`${URL}/get/item`)
        setListItems(response.data);
        console.log('render');
      }catch(err){
        console.log(err);
      }
    }
    getItems();
  },[])

  const deleteItem = async(id) => {
    try{
      const response = await axios.delete(`${URL}/delete/item/${id}`);
      const newListItems = listItems.filter(item=> item._id!==id);
      setListItems(newListItems);
    }catch(err){
      console.log(err); 
    }
  }

  const updateItem = async(id) => {
    try{
      const response = await axios.put(`${URL}/update/item/${id}`)
    }catch(err){
      console.log(err);
    }
  }

  const renderUpdateForm = () => {
    <form className='update_form'>
      <input type="text" className='update_new_input' placeholder='New Item'/>
      <button className='update_new_btn'>Update</button>
    </form>
  }

  const handleChange = (e) => {
    setItemText(e.target.value)
    // console.log(itemText);
  }

  return (
    <div className="App">
      <h1 className="todo_heading">MERN Todo App</h1>
      <form className="add_form" onSubmit={e =>addItem(e)}>
        <input className="add_input" type="text" placeholder="Add Todo Item" onChange={handleChange} value={itemText}/>
        <button className="add_btn" type="submit">Add</button>
      </form>
      <div className="todoItems"> 
      {
        listItems.map(item => {
          return(
            <div className="todoItem">
            {  
                isUpdating===item._id
                ? renderUpdateForm()
                :
                <>
                  <p className="todo">{item.item}</p>
                  <div className="btn">
                    <button className="update_btn" onClick={() => {setIsUpdating(item._id)}}>Update</button>
                    <button className="delete_btn" onClick={() => deleteItem(item._id)}>Delete</button>
                  </div>
                </>
          }
          </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
