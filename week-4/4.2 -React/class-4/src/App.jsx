// with react

// in react create a function that return html
// in without react we in directly return html
// like in dom html is injected in javascript
//so dom return html


import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
        <button onClick={ function(){
          setCount(Math.random())
        }}>
          count is {count}
        </button>
        
    </div>
  )
}

export default App

// without react

//dynamic website 
// when you have to create a dynamic website
// you write a lot of js code that does DOM manipulation

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Counter Example</title>
// </head>

// <body>
//     <div>
//         <button id="btn" onClick="updateDomValue()">
//             Count is 0
//         </button>
//     </div>

//     <script>
//         let count = 0;

//         function updateDomValue() {
//             count = count + 1; 
//             document.getElementById("btn").innerHTML = 'Count is ' + count;
//         }
//     </script>

// </body>

// </html>

// what is npm run dev

//NPM (Node Package Manager) is a tool used to manage packages (libraries or modules) for Node.js applications.
//It allows developers to easily install, update, and share open-source packages from a large online registry.


//npm run dev is a command used to run a script defined in the package.json file of a project
//dev: This is the name of the script. It usually starts a development server for local testing.
// // {
//   "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "start": "node server.js"
//   }
// }
//When you run npm run dev, it will execute vite, which typically starts a local development server.
//npm run dev starts a local development server to test your web app in the browser.

//Vite is a modern frontend build tool that makes development faster and more efficient. It is used to create web applications with frameworks like React, Vue, and Svelte.

//ite creates a local development server (usually on http://localhost:5173) where you can see live changes as you code. 
// It supports Hot Module Replacement (HMR), which means changes you make in the code are instantly reflected in the browser without a full page reload.






