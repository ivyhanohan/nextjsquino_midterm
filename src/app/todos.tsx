// pages/todos.tsx
import { useEffect, useState } from "react";
import { Todo } from "../types";

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.todos));
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-2 mb-2 rounded ${
              todo.completed ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosPage;
