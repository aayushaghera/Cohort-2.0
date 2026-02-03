// useCallback is a React hook used to memoize callback functions.
//  This means React stores the function so it doesn’t get re-created unnecessarily during re-renders unless its dependencies change.




import { memo, useCallback, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // ✅ Using useCallback to memoize the function
  const a = useCallback(() => {
    console.log("hi there");
  }, []);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Counter ({counter})
      </button>
      <Demo a={a} />
    </div>
  );
}

// ✅ Memoized component to avoid unnecessary re-renders
const Demo = memo(function ({ a }) {
  console.log("rerender");
  return (
    <div>
      hi there
      <button onClick={a}></button> {/* Fix: Execute the function properly */}
    </div>
  );
});

export default App;


// Why Use useCallback in the Above Code?
// In your code, the useCallback hook is used for performance optimization. It prevents the function a from being recreated on every render of the App component.

// 🔹 What Happens Without useCallback?
// If we don't use useCallback, the function a is recreated every time App re-renders. This can cause unnecessary re-renders in the Demo component 
// because it's receiving a new function as a prop on each render.

// Every time the App component re-renders (like when clicking the counter button), a new function is created.
// Demo sees that its a prop has changed, so it rerenders unnecessarily.

// With useCallback (Optimized)
// const a = useCallback(() => {
//   console.log("hi there");
// }, []);
// a stays the same between renders unless its dependencies change (in this case, it never changes).
// Demo does not re-render unnecessarily when the counter updates.

// Key takeaway:
// Without useCallback → More re-renders → Slower performance.
// With useCallback → Function stays the same → Better performance.



// 1️⃣ useMemo
// 👉 Used inside a component to memorize the result of a calculation so it doesn’t re-run unnecessarily.
// ✅ Yes, you should use useMemo to avoid expensive calculations running repeatedly when the prop has not changed!

// 2️⃣ memo
// 👉 Used on entire components to skip re-renders if props haven't changed.


//another code of callBack function

// import { memo, useCallback, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   // Memoizing the function using useCallback
//   const inputFunction = useCallback(() => {
//     console.log("hi there");
//   }, []);

//   return (
//     <div>
//       <ButtonComponent inputFunction={inputFunction} />
//       <button onClick={() => setCount(count + 1)}>Click me {count}</button>
//     </div>
//   );
// }

// // Memoized component to prevent unnecessary re-renders
// const ButtonComponent = memo(({ inputFunction }) => {
//   console.log("child render");

//   return (
//     <div>
//       <button onClick={inputFunction}>Button clicked</button>
//     </div>
//   );
// });

// export default App;





// Difference Between useCallback, useState, useEffect, and useMemo (Simple Explanation)
// 1️⃣ useState is used to create and manage state in a functional component. It helps store values that can change over 
// time and trigger re-renders when updated. For example, if you have a counter button, useState will store and update the count whenever the button is clicked.

// 2️⃣ useEffect is used for handling side effects in a React component, such as fetching data from
//  an API, updating the document title, or setting up event listeners. It runs after the component renders and can also perform cleanup when the component
//  unmounts. For example, if you fetch data from a server when a page loads, useEffect ensures the API call happens at the right time.

// 3️⃣ useCallback is used to optimize performance by memoizing functions. If a function is passed as a prop to a child component, 
// React normally recreates the function on every render, which can cause unnecessary re-renders. useCallback prevents this by returning the same function instance unless its dependencies change. 
// This is useful when passing event handlers or functions to child components inside memo.

// 4️⃣ useMemo is similar to useCallback, but instead of memoizing functions, it memoizes values (like the result of expensive calculations). If a calculation takes a long time (such as sorting a large array),
//  useMemo ensures that React doesn’t recalculate it unless the dependencies change. This helps in improving performance by avoiding unnecessary computations.