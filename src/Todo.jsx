import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Todolist () {

    let [todos, setTodos] = useState(["sample task"])
    let [newTodo, setnewTodo] = useState("")

    let handleChange = (event) => {
       setnewTodo(event.target.value) 
    }

    let addnewTask = ()=> {
        setTodos([...todos, newTodo])
        setnewTodo("");
    }


    return (
        <div className='flex flex-col'>
            <h1 className=" flex justify-center w-[100vw] bg-black text-white font-medium text-[50px]">Todolist</h1>
           <div className="flex items-center flex-col w-[100vw] mt-7">
             <div className='flex items-center gap-3'>
             <input onChange={handleChange} value={newTodo} className=' border-[2px] border-black w-[15rem] h-[35px] pl-2' type='text' placeholder='Enter Task'></input>
             <Button onClick={addnewTask}  style={{background: "black", color: "white"}} variant="contained">Add Task</Button>
             </div>

             <ul className='mt-4'>
                {
                    todos.map( (todo) => (
                        <li key={todo} className=' text-[25px]'>{todo}</li>
                    ))
                }
             </ul>
           </div>
        </div>
    )
}