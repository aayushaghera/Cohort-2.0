//2->>>>>>>>>>> used key concept

import { useState } from 'react'
import './App.css'

function ReactKey() {
  const [todos, setTodos] = useState([{
    id:1,
    title: "go to gym",
    description:"go to gym today"
  },{
    id:2,
    title: "eat food",
    description:"eat food"
  },{
    id:3,
    title: "go to class",
    description:"go to class"
  }
])

function addTodo()
{
  setTodos([...todos,{
    id:4,
    title:Math.random(),
    description:Math.random()
  }])
}

return (
  <div>
    <button onClick={addTodo}>Add a Todo </button>

    {todos.map(function (todo) {
      return <Todo key = {todo.id} title={todo.title} description={todo.description} />;
    })}
  </div>
);


  function Todo({title,description}){
    return<div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  }
}

export default ReactKey