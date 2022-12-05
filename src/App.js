import Button from "./components/Button";
import Todo from "./components/Todo";
import { useState } from "react";



function App() {

  const [text, setText] = useState('')
  const [todo, setTodo] = useState([])

  const deleteItem=(id)=>{
    const updatedTodo=todo.filter((value,index)=>{
      return index!==id
    })

    setTodo(updatedTodo)
  }

  return (
    <div className="App flex flex-col gap-4 items-center p-16 h-screen">
      <h1 className="text-3xl sm:text-4xl capitalize  font-bold bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent p-2">React todo app</h1>

      <div className='w-80 p-1 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 rounded-sm'>
        <div className='flex items-center bg-white rounded-sm'>
            <input className='w-full py-2 px-4 outline-none placeholder:text-purple-600' type="text" placeholder='Add Your Todo Here' value={text} onChange={(e)=>setText(e.target.value)}/>
            <i className="fa-solid fa-plus mx-2 text-xl text-purple-600 cursor-pointer" onClick={()=>{
              if(!text){}
              else{

                setTodo([...todo,text])
                setText('')
              }
            }}></i>
        </div>
    </div>

      

    {/* todo */}
    {todo.map((value,index)=>
    <div className='flex bg-indigo-600 items-center w-80 rounded p-2 text-white font-semibold justify-between' key={index}>
    <p className='truncate'>{value}</p>
    <i className="fa-regular fa-trash ml-2 cursor-pointer" onClick={()=>deleteItem(index)}></i>
    </div>
    )}

    {/*delete all button */}
    <button className='capitalize bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 py-2 px-4 rounded-md text-white font-semibold text-lg tracking-wider' onClick={()=>setTodo([])}>
        delete all
    </button>

    </div>
  );
}

export default App;
