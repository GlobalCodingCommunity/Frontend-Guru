import { useState } from "react";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target["task"].value;
    setTaskList((prev) => [...prev, value]);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add your task" name="task" />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <ul>
        {taskList.map((task) => (
          <li>
            <span>{task}</span>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * 1. input - cleared upon successful addition
 * 2. remove
 * markup - adding id
 */
