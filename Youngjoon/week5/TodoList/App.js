import React from "react";

const DEFAULT_ITEMS = [
  {
    id: 1,
    name: "Walk the dog",
  },
  {
    id: 2,
    name: "Water the plants",
  },
  {
    id: 3,
    name: "Wash the dishes",
  },
];

export default function App() {
  const [items, setItems] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");

  React.useEffect(() => {
    setItems(DEFAULT_ITEMS);
  }, []);

  const handleSubmit = () => {
    const tmp = {
      id: items.length + 1,
      name: newTask,
    };

    setItems(prev => [...prev, tmp]);
  };

  const handleDelete = id => {
    let tmp = [...items];
    tmp = tmp.filter(item => item.id !== id);

    setItems(tmp);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
