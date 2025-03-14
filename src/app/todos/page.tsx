"use client";

import { useEffect, useState } from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi"; // Import icons

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.todos));
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4 text-center">Todos</h1>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-3 flex items-center gap-3 rounded-lg shadow-md ${
              todo.completed ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {todo.completed ? (
              <FiCheckCircle className="text-white text-xl" /> // Green check icon
            ) : (
              <FiXCircle className="text-white text-xl" /> // Red X icon
            )}
            <span className="flex-1">{todo.todo}</span>
            <span className="text-sm font-semibold px-2 py-1 rounded bg-white text-black">
              {todo.completed ? "Complete" : "Incomplete"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosPage;
