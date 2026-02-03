// 3-->>>>>> now we learn HOOK

// any time we defined a state variable we use usestate() function
// usestate() is a one hook
// hook into the react state that means defined state variable and update them
// until now we use function base component but in past use class based component
// that use lifecycle method like oncomponentmount()
// but in our case function base component we use lifecycle method like useEffect and some hook
// hook are also do some same like oncomponentmount()

// useEffect() is a first lifecycle hook

// when this component is mount alert(hi)
// useEffect(function()
// {
//   alert("hi")
// },[])
// you write above syntax in your functional component
// it is similar to your class based component we use earlier class based component




// What is a Lifecycle Method?
// Lifecycle methods are special methods in React class components that let you run specific code at different stages of a component's life (from creation to removal). They allow you to control what happens during mounting, updating, and unmounting phases of a component.

// Lifecycle Phases:

// Mounting: When the component is created and added to the DOM.
// Example method: componentDidMount()
// Runs when the component is rendered for the first time.

// Updating: When the component re-renders due to changes in props or state.
// Example method: componentDidUpdate()
// Runs when the component updates. Useful for reacting to changes.

// Unmounting: When the component is removed from the DOM.
// Example method: componentWillUnmount()
// Runs before the component is destroyed. Good for cleanup tasks like removing event listeners.


// Hooks vs Lifecycle Methods
// With React Hooks, you don't need lifecycle methods in functional components. Instead, you can use useEffect to handle side effects in any phase (mounting, updating, or unmounting).
// useEffect can replace componentDidMount, componentDidUpdate, and componentWillUnmount depending on how you use it.


// import React, { useEffect } from 'react';

// function Welcome() {
//   useEffect(() => {
//     console.log('Welcome component mounted!');
//   }, []);  // Runs once after the component is added to the DOM

//   return <h1>Welcome to React!</h1>;
// }

// export default Welcome;

// "Mounting" = The component is created and added to the screen for the first time.

// What is the useEffect Hook?
// The useEffect Hook lets you run some code right after the component is added to the DOM (mounted). 
// Think of it like setting up a component once it appears on the page.

// useEffect(() => {
//     console.log('Component mounted!');
//   }, []);

// The empty square brackets [] tell React:
// "Run this code only once, when the component is added to the DOM, and don’t run it again."
  


// What is "Re-rendering"?
// Re-rendering happens when the component is already mounted, but React calls the function again to update the UI based on changes in state or props.
// It's like React updating the existing object without creating a new one.


// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   console.log('App is rendering!'); // Logs every time the component re-renders

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//     </div>
//   );
// }

// What happens here:

// Mounting:
// When <App /> is used for the first time, React calls the App function.
// It shows Counter: 0 on the screen.
// Logs "App is rendering!" for the first time.

// Re-rendering:
// When you click the button, setCount(count + 1) updates the count state.
// React re-runs the App function to update the UI with the new value of count.
// It logs "App is rendering!" again because the component re-rendered.

// Summary
// Mounted: Happens once when the component is created and added to the DOM for the first time.
// Re-rendered: Happens multiple times whenever the component updates because of changes in state or props.

// What is useEffect and its Use in This Situation?
// useEffect is a Hook that lets you run code at specific times during the component’s lifecycle.

// In the counter app, useEffect can help you:

// Run something only once when the component mounts (e.g., log a message, fetch data, or set up something):

// useEffect(() => {
//     console.log("App mounted!");
//   }, []); // Empty array -> Runs only once (on mount)
  
// useEffect(() => {
//     console.log(`Count changed to: ${count}`);
//   }, [count]); // Runs whenever "count" changes


// How useEffect Works with Lifecycle Events

// componentDidMount (Mount) → Use useEffect with an empty dependency array [].
// useEffect(() => {
//     console.log("Component mounted!");
//   }, []); // Runs only once when the component is created
  
// componentDidUpdate (Update) → Use useEffect with a dependency (e.g., [count]).
// useEffect(() => {
//     console.log(`Count updated to: ${count}`);
//   }, [count]); // Runs every time "count" changes
  
// function CounterApp() {
//     const [count, setCount] = useState(0);
  
//     // Log only when "count" changes
//     useEffect(() => {
//       console.log(`Count is updated: ${count}`);
//     }, [count]);
  
//     return (
//       <div>
//         <h1>Count: {count}</h1>
//         <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       </div>
//     );
//   }

  

// We use useEffect in React to handle side effects — tasks that interact with the outside world, like fetching data, subscribing to events, or manipulating the DOM outside of React's usual rendering flow.

// Why Not Just Use useState?
// useState is good for handling internal component state.
// But sometimes, you need to perform operations that aren't directly related to rendering the component, such as interacting with external systems or cleaning up resources when the component is unmounted. This is where useEffect comes in.
// Common Problems Addressed by useEffect:
// Fetching Data (API Calls):

// You want to fetch data from an API when the component mounts or when a dependency changes, and update the state with that data.
// Problem: useState alone can't handle async operations like data fetching directly.
// Solution: Use useEffect to trigger the data fetch after the component is mounted, and update the state once the data is fetched.

// useEffect(() => {
//     fetch("https://api.example.com/data")
//       .then(response => response.json())
//       .then(data => setData(data)); // Update state after fetching data
//   }, []); // Empty dependency means it runs only once when the component mounts
  
// 1. useEffect(() => { ... }, []);
// useEffect is a React Hook used to perform side effects in your component.
// The function inside useEffect runs after the component renders, and it is not directly related to rendering. This is useful for tasks like fetching data, subscribing to events, or updating the DOM.
// The empty array [] is a dependency array. It tells React that this effect only needs to run once — when the component first mounts. If you were to pass specific values inside the array, it would run whenever those values change.

// What happens if you fetch data directly in the render function?

// function App() {
//     const [data, setData] = useState([]);
  
//     fetch("https://api.example.com/data")
//       .then((response) => response.json())
//       .then((data) => setData(data)); // Updates state directly in the render
  
//     return <div>{JSON.stringify(data)}</div>;
//   }
  

// Issues that occur:
// Infinite Loop

// When you update the state using setData(data), it triggers a re-render of the component.
// During the re-render, the fetch call is executed again, which updates the state and causes another re-render.
// This creates an infinite loop that can crash your app.

// How useEffect solves the problem
// When you use useEffect for fetching data, you ensure that the fetch operation happens only when it’s supposed to. Here's why:

// Controlled Execution

// With useEffect(() => {...}, []), the fetch call is made only once, right after the component is mounted (added to the DOM).
// React ensures this happens outside the render cycle, so the render function remains pure.
// Prevents Infinite Loops

// The empty dependency array ([]) ensures that useEffect doesn't run again on every re-render, avoiding infinite loops.
// Clean Separation of Concerns

// useEffect is designed for side effects (like data fetching), keeping the render function clean and focused on UI logic.
// Optimized Fetching

// If you want the fetch operation to run again under specific conditions (e.g., when a dependency changes), you can provide those dependencies in the array:

// useEffect(() => {
//     fetch("https://api.example.com/data")
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, [someDependency]); // Runs only when `someDependency` changes



// useEffect is a tool in React that allows you to run certain code after a component renders. It’s typically used for tasks that don’t affect how the UI looks directly, like fetching data or interacting with an external service. However, it’s not mainly designed to stop or minimize re-renders.

// In other words, useEffect helps run side effects after the component renders, but if you want to reduce how often a component re-renders, you would use other tools like:

// React.memo: This prevents unnecessary re-renders of child components when their props haven't changed.
// useCallback: This ensures that functions don’t get recreated on every render, which can prevent child components from re-rendering unnecessarily.
// useMemo: This prevents expensive calculations from being repeated unless necessary.
// In short, while useEffect is helpful for handling things after rendering (like data fetching), it’s not the best tool for directly minimizing re-renders. Other methods are more suited for that job.

// information of callback function

// 1. Arrow Function:
// Arrow functions are a shorthand way of writing functions in JavaScript using the => syntax.
// Example: () => { console.log("Hello"); } is an arrow function.
// 2. Anonymous Function:
// An anonymous function is a function that does not have a name. In your case, the function () => { console.log(Count is updated: ${count}); } doesn't have a name, making it anonymous.
// Example: A function that is passed as an argument or defined inline is often anonymous.
// 3. Callback Function:
// A callback function is a function that is passed as an argument to another function to be called at a later time, often after an event or action has completed.

// In your example, if this function is passed as an argument to another function (like setTimeout, setInterval, or an event handler), then it can be considered a callback function.


// 1. Named Callback Function:
// A callback function can have a name. When it has a name, it is just a regular function that is passed as a reference to another function.

// Example:

// javascript
// Copy
// Edit
// function greeting() {
//   console.log("Hello, world!");
// }

// function process(callback) {
//   callback(); // calling the callback function
// }

// process(greeting); // Passes the named function as a callback
// In this case, greeting is a named callback function passed to process.

// 2. Anonymous Callback Function:
// A callback function can also be anonymous (i.e., without a name). These are often written inline where they're passed as arguments to another function.

// Example:

// javascript
// Copy
// Edit
// function process(callback) {
//   callback(); // calling the callback function
// }

// process(function() {
//   console.log("Hello, world!");
// }); // Passing an anonymous function as a callback
// In this case, the function function() { console.log("Hello, world!"); } is an anonymous callback function passed to process.

// 3. Arrow Function Callback:
// Similarly, an arrow function can also be used as a callback function, and it can be anonymous as well.

// Example:

// javascript
// Copy
// Edit
// process(() => {
//   console.log("Hello, world!");
// }); // Arrow function as an anonymous callback
// Summary:
// Named Callback: A callback function with a name.
// Anonymous Callback: A callback function without a name, commonly used in inline function definitions. Both are valid forms of callback functions; the difference is whether or not the function has a name.
  