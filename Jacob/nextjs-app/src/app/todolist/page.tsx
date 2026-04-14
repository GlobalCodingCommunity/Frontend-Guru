"use client";

import { useState } from "react";
import Wrapper from "@/components/Wrapper";

interface Todo {
  id: number;
  text: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodos([...todos, { id: todos.length + 1, text: input }]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Wrapper title="Todo List">
      <form className="flex items-center gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white text-black p-2"
        />
        <button type="submit" className="bg-white text-black p-2">
          Submit
        </button>
      </form>
      <ul className="flex flex-col gap-2 mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2">
            <span>{todo.text}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="bg-white text-black px-2 py-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
