'use client'

import { useState } from "react";
import { TransformStreamDefaultController } from "stream/web";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}



export default function TodoList()  {
    const [todos, setTodos] = useState <Todo[]>([]);

    const [inputValue , setInputValue] = useState("")


    //add of iteam
    const addTodo = () => {
        if (inputValue.trim()=== "") return;
        setTodos([
            ...todos,
            {id:Date.now(), text:inputValue,completed:false}
    
        ]) 
        setInputValue("");
    }


    // add value id
const toggleTodo = (id:number) =>{
setTodos(
        todos.map((todo) =>
        todo.id === id? {...todo, completed:!todo.completed}: todo
    )
)
    }


// delete todo section 
const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
};
return(
    <div className="flex flex-col min-h-screen bg-zinc-600">
        <header className=" bg-zinc-400   text-zinc-700 py-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-serif font-bold">To Do List  By Ali Asghar</h1>
                <p className="font-bold mt-3"> {" "}Origanize  your work with our Next.Js To Do List.</p>
            </div>
        </header>


         <main className="flex-grow flex items-center   justify-center">
            <div className="max-w-md mx-auto p-4 bg-zinc-500 rounded-lg shadow-md">
                <div className="mb-4">
                    <div className="flex">
                        <input type="text" 
                        value={inputValue}
                        onChange={(e) =>setInputValue(e.target.value)}
                        className="flex-grow p-2 border border-gray-700 rounded-lg"
                        placeholder="Enter Your Tasks....."
                        />

                    <button
                    onClick={addTodo}
                    className="ml-2 px-4 py-2 bg-zinc-300 text-black font-bold font-mono rounded-lg hover:bg-zinc-600"
                    
                    >
                    Add
                    </button>
                    </div>
                </div>


                <ul className="space-y-2">
                    {todos.map ((todo) => (
                        <li key={todo.id}
                            className={`text-white flex items-center justify-between p-2 border border-zinc-800 rounded-lg font-semibold ${
                                todo.completed ? "bg-slate-900 line-through" : "bg-zinc-900"
                                }`}
                        >
                            <span>{todo.text}</span>

                            <div>
                            <button
                                onClick={() => toggleTodo(todo.id)}
                                className="px-2 py-1 text-sm bg-slate-600   rounded-lg hover:bg-slate-800"
                                >Complete</button>






                               <button
                                onClick={() => deleteTodo(todo.id)}
                                className="px-2 py-1 text-sm bg-slate-600  rounded-lg hover:bg-slate-800"
                                >Delete
                            </button>
                            </div>
                        </li>
                    ))}
                </ul>



            </div>
         </main>


    </div>
)
}

