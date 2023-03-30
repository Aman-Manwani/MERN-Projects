import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios'


function App() {

  const URL = 'http://localhost:8000';

  const [itemText,setItemText] = useState('');
  const [listItems,setListItems] = useState([]);
  const [isUpdating,setIsUpdating] = useState('');
  const [newItemText,setNewItemText] = useState('');
  
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
      console.log(response);
      setListItems(newListItems);
    }catch(err){
      console.log(err); 
    }
  }

  const updateItem = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.put(`${URL}/update/item/${isUpdating}`,{item:newItemText});
      setIsUpdating('')
      setNewItemText('')
      const changedIndex =  listItems.findIndex(item=> item._id===isUpdating);
      listItems[changedIndex].item = newItemText;
      console.log('updated success',response);
    }catch(err){
      console.log(err);
    }
  }

  const renderUpdateForm = () => {
    return(
    <>
      <form onSubmit={e=>{updateItem(e)}} className='update_form'>
        <input type="text" className='update_new_input' onChange={e=>{setNewItemText(e.target.value)}} placeholder='Enter Updated Item' value={newItemText}/>
        <button type='submit' className='update_new_btn'>Update</button>
      </form>
    </>
    )
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
            <div key={item._id} className="todoItem">
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
