import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const[input,setInput]=useState("");
  const[todos,setTodos]=useState([]);
  const addToDo=(e)=>{
    console.log("Boom", input);
    setTodos([...todos,input]);
    setInput("");
   

  }
return (
  <div className="App">
    <h1> Todo app </h1>
    <input 
    value={input}
     onChange={(e) => setInput(e.target.value)} 
     type="text"  />
    <button disabled={!input}
     onClick={addToDo}>Add</button>
   
    {
      todos.map((todo,i)=>{
      return <Todo title={todo}
      key={i}
      />;
      })}
      </div>
      );
    }  
  
  



export default App;
