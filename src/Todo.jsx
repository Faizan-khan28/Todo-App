import { useState } from "react";

export default function Todolist() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  let handleChange = (event) => {
    setTask(event.target.value);
  };


  let addNewTodo = () => {
    if(task === "") return;
    let newTodo = {
      id: Date.now(),
      text: task,
    }
    setTodos([...todos, newTodo]);
     console.log(todos)
    setTask("");
  }


   let deleteTodo = (index) => {
    setTodos(todos.filter((todo) => todo !== index));
  }

   let deleteOneTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !==  id ));
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
        {todos.map((todo , index) => (
           <div key={todo.id} className="flex justify-center gap-2">
            <li>{todo.text}</li>
            <button onClick={()=> deleteTodo(index)} className="bg-red-400 mb-3 py-1 px-3 text-[14px]">Delete task</button>
            <button onClick={()=> deleteOneTodo(todo.id)} className="bg-blue-400 mb-3 py-1 px-3 text-[14px]">Delete one</button>
           </div>
        ))}
      </ul>
    </div> 
  );
}
