import './ComplimentS.scss';
import { useState } from 'react';

// function Todos (){
//    const [newTodo,setNewTodo]=useState('');
//    const [todos,setTodos]=useState(()=>{
//     const storedTodo = localStorage.getItem('todos');
//     return storedTodo ? JSON.parse(storedTodo) : [];
//    });
// const [user,setUser]=useState
//     const handleNewTodoChange = (e)=>{
//     setNewTodo(e.target.value)
//     }

//     const handleNewTodoSubmit = (e)=>{
//         e.preventDefault();
//         if(!newTodo.trim()) return;

//         setTodos(...todos,{id: Date.now(),text : newTodo});

//         setNewTodo('')
//     }
    

//     localStorage.setItem('todos', JSON.stringify(todos))


//     return(
//         <>
//         <button>Add User</button>
//             <h1 className='todo__title'>To Do List </h1>
//             <form onSubmit={handleNewTodoSubmit} className='todo__form'>
//             <label className='name__label' >
//                 Name:
//                 <input type="text" value={newTodo} onChange={handleNewTodoChange} className='todo__inp'/>
//             </label>
//             <button type='submit' className='todo__btn'>Submit</button>
//              </form>
//             <ul>
//             {
//             todos.map((item) => (
//             <li key={item.id}>
//              <span>{item.text}</span>
//             </li>
//                 ))
//             }
//             </ul>
//         </>
//     )
// }
export default Todos;