import React from 'react';

function App() {
  // State to keep track of the count
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Button count={count} setCount={setCount} />
    </div>
  );
}

function Button(props) {
  // Function to handle button click
  function onButtonClick() {
    props.setCount(props.count + 1);
  }

  return (
    <button onClick={onButtonClick}> Counter {props.count}</button>
  );
}

export default App;


// information of basic react


// What is useState?

// useState is a React Hook that allows you to add state management to functional components. It helps you create and manage stateful 
// variables in React components, enabling dynamic updates and re-rendering of the UI when the state changes.

// useState is a special tool in React (called a Hook) that lets a component "remember" information, like a variable.
// What is "state"?

// State is like a special variable that React watches closely.
// If the state changes, React knows something has been updated and will automatically update the screen (re-render the component) to show the new information.



// useState lets React keep track of values that might change (like a score, input text, or toggle status).
// When the state changes, React updates the screen for you without you doing it manually.
// This is what makes React powerful for creating interactive, dynamic user interfaces.


// setCount(count + 1);
// This increases count by 1 and tells React to re-render the component with the updated count value.


// --->>>Without useState:

// If you click a button to increase the counter, the number won't change on the screen because React doesn't know that the value has updated.


//---->>>> With useState:

// React "remembers" the counter value (this is the state).
// When you increase the counter, React notices the change and updates the screen to show the new number.



// manually update the counter not used of useststate() react

// function App() {
//   let count = 0; // Regular variable, not tracked by React

//   function onClickHandler() {
//     count += 1; // Increment the count
//     document.getElementById('counter-display').innerText = `Counter: ${count}`; // Manually update the DOM
//   }

//   return (
//     <div>
//       <div id="counter-display">Counter: 0</div>
//       <button onClick={onClickHandler}>Increment</button>
//     </div>
//   );
// }

// export default App;






// below code is same as above code we write as a front

// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0);
    

//   function onCLickHandler()
//   {
//       setCount(count+1);
//   }

//   return (
//        <div>
//         <button onClick={onCLickHandler}>Counter {count}</button>
//        </div>
//   )
// }

// export default App