import "./App.css"
import { useEffect, useRef } from "react";
import { useState } from "react";
import { uploadFile } from "./services/api";

function App() {

  const[file,setfile] = useState('');

  const fileInputRef = useRef();

  const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  const onUpload = () =>{
    fileInputRef.current.click();
  }

  useEffect(()=>{
    const getImage = async() =>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);
        let response = await uploadFile(data);
      }
    }
    getImage();
  },[file])

  return (
    <div className="app">
      <img src={url} alt='left_banner' className="left_banner" />
      <div className="right_side">
        <h1 className="sharing_heading">File Sharing Platform!</h1>
        <p className="normal_text">Upload and Share the Download Link</p>
        <button onClick={() => onUpload()} className="upload_btn" >Upload </button>
        <input type="file" className="upload_input" ref={fileInputRef} onChange = {(e) => setfile(e.target.files[0])}/>
      </div>
    </div>
  );
}

export default App;
