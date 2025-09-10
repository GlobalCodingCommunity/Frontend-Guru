import { useRef, useState } from "react";

export default function App() {
  const inputRef = useRef();
  const [list, setList] = useState([]);

  const addTodoToList = (body) => {
    if (!body) return alert("You must add a todo");

    const newTodo = {
      id: Math.random(),
      body: body.trim(),
    };

    // add todo logic
    setList((prev) => [...prev, newTodo]);
    return;
  };

  const deleteTodoFromList = (id) => {
    if (!id)
      return alert("There was an error deliting your todo. Please try again");

    // add delete logic
    setList((prev) => prev.filter((p) => p.id !== id));

    // refocus on input
    inputRef.current.focus();
  };

  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();

    // submit logic
    const current = inputRef.current.value;

    addTodoToList(current);

    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input ref={inputRef} type="text" placeholder="Add your task" />
          <div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
      <button onClick={() => setList([])}>Clear List</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>{item.body}</span>
            <button onClick={() => deleteTodoFromList(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
