import { useState } from "react";

export default function Todolist() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  let handleChange = (event) => {
    setTask(event.target.value);
  };

  let addNewTodo = () => {
    setTodo([...todo, task]);
    setTask("");
  };

  let deleteTodo = (index) => {
    let filtertasks = todo.filter((task) => task == index)
    setTodo(filtertasks);
    console.log("task is deleted")
  }

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
         <div key={index} className="flex justify-center gap-2">
           <li>{task}</li>
           <button onClick={()=> deleteTodo(index)} className="bg-red-400 py-1 px-3 text-[14px]">Delete task</button>
         </div>
        ))}
      </ul>
    </div>
  );
}
