//React-router-dom Routong

// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import { lazy } from "react";

// const Dashboard = lazy(() => import("./Components/Dashboard"));
// const Landing = lazy(() => import("./Components/Landing"));


// function App() {
  
//   return (
//     <div>
//     <BrowserRouter>
//       <Appbar/>
//       <Routes>
//        <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
//        <Route path="/" element={<Landing></Landing>}/>
//       </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// function Appbar()
// {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div>

//        <button onClick={()=>{
//           navigate("/");
//        }}>Landing Page</button>

//       <button onClick={()=>{
//           navigate("/dashboard");
//        }}>Dashboard</button>
//     </div>
//     </div>
//   );
// }


// export default App;



// Without React.lazy (Normal Import) 🚀
// 👉 Imagine you order all the food at once in a restaurant, even if you don’t eat everything immediately.
// 👉 Your table gets crowded with unnecessary dishes.
// 👉 This is how React works without React.lazy → It loads everything at the start, even if you don’t use all the components right away.
// import Dashboard from "./Dashboard";  
// import Home from "./Home";  

// With React.lazy (Lazy Loading) ⚡
// 👉 Now, imagine you only order food when you need it.
// 👉 Your table stays clean, and food comes only when you're ready to eat.
// 👉 This is how React.lazy works → It loads a component only when needed, keeping the app fast
// const Dashboard = lazy(() => import("./Components/Dashboard"));
// const Landing = lazy(() => import("./Components/Landing"));



// Final Takeaway
// 🔴 Without Lazy Loading → The whole website loads at once (slow).
// ✅ With Lazy Loading → Only needed components load, making the app faster.

// ✅ Use export default when exporting a single component or function.
// ✅ Use export when exporting multiple functions or utilities from a file.
// export default
// import anyName from "file"

//export
// import { exactName } from "file"


//prop=Drilling ????

import React, { createContext, useState, useContext } from "react";
import { CountContext } from "./Context";  // Adjust the path based on your file structure

// Create a Context to share the count state


function App() {
  // State to store the count value
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Provide the count value to all child components */}
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

// 1️⃣ CountContext.Provider shares the count value
// It wraps the <Count /> component, meaning all components inside <Count /> can access count directly.
// Any component outside this wrapper cannot access count from Context.
// Why Do This?
// Instead of passing count as a prop through multiple components (prop drilling),
//  Context allows any component inside <Count /> to access it directly.

function Count({ setCount }) {
  console.log("render");
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  // Get the count value from the Context
  const count = useContext(CountContext);

  return <div>{count}</div>;
}

function Buttons({ setCount }) {
  // Get the count value from the Context
  const count = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;


// 🔹 What Does const count = useContext(CountContext); Mean?
// This line is extracting the count value from the CountContext using the useContext hook.

// 🔹 Simple Explanation:
// 1️⃣ CountContext is a React Context

// It was created using createContext().

// It stores a shared value (count) that multiple components can access.

// 2️⃣ useContext(CountContext) Fetches the Value

// Instead of passing count manually as a prop, we use useContext(CountContext).

// This allows any component inside CountContext.Provider to access count directly.

// 🔹 What Happens in the Code?
// When useContext(CountContext) runs:

// It checks if the component is inside a CountContext.Provider.

// If yes, it retrieves the count value from the Provider.

// Now, the component can use count without needing a prop.

// 🔹 Why Use This?
// ✅ Avoids prop drilling (passing props unnecessarily).
// ✅ Makes code cleaner and easier to manage.

// Would you like help modifying your code to also include setCount in Context? 🚀


// function Count({ setCount }) {
//   console.log("render");
//   return (
//     <div>
//       <CountRenderer />
//       <Buttons setCount={setCount} />
//     </div>
//   );
// }

//in above code count is not pass so they also rendering 
// this poblem solved by statemanagemnet in .......next folder.....
//context api solved only props drilling problem but they do not solved 
// unnecessury rendering problem thta problem solved by statemanagement...