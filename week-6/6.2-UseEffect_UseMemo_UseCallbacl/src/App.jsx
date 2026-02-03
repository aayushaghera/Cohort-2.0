//1----->>> useEffect
//all todos are get 

// import { useState } from "react";
// import { useEffect } from "react";

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     fetch("https://raw.githubusercontent.com/aayushaghera/Todo_API/refs/heads/main/Todo.json?token=GHSAT0AAAAAAC3VTKYE2ADJSDHLZAF5KAEQZ4WT6BA")
//       .then(async function(res) {
//         const json = await res.json();
//         setTodos(json.todos);
//       })
//   }, [])

//   return <div>
//     {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//   </div>
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h4>
//       {description}
//     </h4>
//   </div>
// }

// export default App;

//give id and get todos 

// import { useState } from "react";
// import { useEffect } from "react";

// function App()
// {
//   return <div>
//     <Todo id = {1}/>
//   </div>
// }

// function Todo({id})
// {
//   const [todos,setTodos] = useState({});
  
//   useEffect(()=>{
//     fetch("https://raw.githubusercontent.com/aayushaghera/Todo_API/refs/heads/main/Todo.json?token=GHSAT0AAAAAAC3VTKYF77V6ODIUYNH6KLLEZ4XRFMQ")
//       .then(async function(res) {
//         const json = await res.json();
//         const todo = json.todos.find((todo) => todo.id === id);
//         if (todo) {
//           setTodos(todo);
//         }
//       })
//   },[])



//   return <div>
//     <h1>
//       {todos.title}
//     </h1>
//     <h4>
//       {todos.description}
//     </h4>
//   </div>
// }
// export default App;


//click button and getTodos

import { useState } from "react";
import { useEffect } from "react";

function App()
{

  const [selectedId,setSelectedId] = useState(2);

  return <div>

    <button onClick={function(){
      setSelectedId(1);
    }}>1</button>

    <button onClick={function(){
      setSelectedId(2);
    }}>2</button>

    <button onClick={function(){
      setSelectedId(3);
    }}>3</button>

    <Todo id = {selectedId}/>
  </div>
}

function Todo({id})
{
  const [todos,setTodos] = useState({});
  
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/aayushaghera/Todo_API/refs/heads/main/Todo.json?token=GHSAT0AAAAAAC3VTKYFQMA565YDKF5TVHSAZ4XTGTQ")
      .then(async function(res) {
        const json = await res.json();
        const todo = json.todos.find((todo) => todo.id === id);
        if (todo) {
          setTodos(todo);
        }
      })
  },[id])



  return <div>
    <h1>
      {todos.title}
    </h1>
    <h4>
      {todos.description}
    </h4>
  </div>
}
export default App;

// A side effect in React refers to anything your component does that affects something outside the scope of the component during its lifecycle. These are tasks that don’t directly contribute to rendering the UI but interact with the outside world, like:

// Fetching data from an API.
// Subscribing to a data source (e.g., WebSocket, event listeners).
// Manually updating the DOM.
// Setting up timers (setTimeout or setInterval).

// Why use useEffect? React components re-render frequently.
//  useEffect ensures that side effects like API calls or subscriptions only happen at specific times (e.g., when the component mounts or updates).

// [] (Empty Array):
// The side effect runs only once, when the component first appears (mounts) on the screen.

// [dependency]:
// The side effect runs whenever the dependency changes.
// Example: If you're watching a variable like count, the effect will re-run every time count updates.

// What is a "side effect" in React?
// A side effect is something your component does that interacts with the world outside of React. For example:

// Fetching data.

// When a React component first mounts:

// If you are only changing styles or content inside the component, that’s not a side effect.
// But if you interact with something outside the component, like fetching data from a server, logging to the console, or setting up a subscription, that is a side effect.
// And yes, you handle these side effects using useEffect in React. It ensures the side effects happen at the right time, like when the component mounts, updates, or unmounts.

// In Short:
// Inside tasks: Anything your component does that stays within its own "world" (state, props, rendering, styles).
// Side effects: Anything your component does that interacts with the "outside world" (APIs, timers, event listeners).
// And yes, you use useEffect to manage side effects properly

//in short from my summery and my understand like when first component is 
//mountand like that component state update and that componenr render and that component unmount
// and that component style change and anything
//but like that component interect with something external
//its called sideeffect like fetching API..... 