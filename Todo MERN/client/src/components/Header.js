import React from "react";
import { useState } from "react";

function Header() {
    
    const [todo,set_todo] = useState("");

    const onInputChange = (e) => {
        set_todo(e.target.value);
    }
  return (
    <header className="header">
      <h1 className="heading">Todo List</h1>
      <input
        placeholder="Enter your Todo"
        type="text"
        className="todo_input"
        onChange={onInputChange}
      />
    </header>
  );
}

export default Header;
