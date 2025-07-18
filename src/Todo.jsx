import { useState } from "react";

export default function Todolist() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  let handleChange = event => {
    setTask(event.target.value);
  };

  let addNewTodo = () => {
    setTodo([...todo, task]);
    setTask("");
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-semibold">todo app</h1>
      <div className="flex justify-center gap-2">
        <input
          className="border w-56 pl-3 border-black"
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter task"
        />
        <button
          onClick={addNewTodo}
          className="bg-blue-400 px-3 font-semibold py-1"
        >
          Add task
        </button>
      </div>
      <ul className="text-center mt-3 font-medium text-xl">
        {todo.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
