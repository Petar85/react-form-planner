import React, { useState } from 'react';
import { v4 as uuid } from "uuidv4";
import "./components/AddTask"
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); 
  const addTaskHandler = (task) => {
    setTasks([...tasks, { id: uuid.v4(), ...task }]); 
   };

   const removeTaskHandler = (id) => {
    const newTaskList = tasks.filter(t => t.id !== id);
    setTasks(newTaskList);
   };

   

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
