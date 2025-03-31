import React, { useState } from "react";
import "./App.css"

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [tasks, setTasks] = useState([]);

  const addActivity = () => {
    if (activity) {
      setTasks([...tasks, activity]);
      setActivity(""); 
    }
  };

  const deleteActivity = (index) => {
    const newTasks = [...tasks]; // Create a copy of the array
    newTasks.splice(index, 1); // Remove 1 item at the given index
    setTasks(newTasks); // Update the state
  };
  

  return (
    <div className="container">
    <h2>To-Do List</h2>
    <input type="text" value={activity} onChange={(e) => setActivity(e.target.value)} />
    <button onClick={addActivity}>ADD</button>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task} <button onClick={() => deleteActivity(index)}>DELETE</button>
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default TodoList;

