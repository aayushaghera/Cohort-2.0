// What is useMemo and Memoization in React?
// Memoization in React is a technique used to optimize performance by caching the result of a
//  function so that it doesn’t re-run unnecessarily. React’s useMemo hook helps with this by remembering the output 
// of a computation until the inputs (dependencies) change.

// What is useMemo?
// useMemo is a React hook that memoizes the result of a computation to avoid unnecessary re-calculations.
// It’s useful when you have a computationally expensive function and you only want it to run when certain values (dependencies) change.

// Benefits of Memoization (useMemo)
// Performance Optimization: Prevents unnecessary computations, improving performance.
// Re-renders Efficiency: Helps in avoiding costly calculations during re-renders.

// What is Memoization and Caching in Simple Terms?
// Caching:
// Caching means saving data or a result in a temporary storage (like memory) so it can be reused later.
// Instead of recalculating or fetching the same thing multiple times, we use the saved result from the cache.

// import { useMemo, useState } from "react";

// function Memo() {
//     const [counter, setCounter] = useState(0);
//     const [inputValue,setInputValue] = useState(1);

//     let count = 0;
//     for(let i = 1; i<=inputValue; i++)
//     {
//         count = count + i;
//     }
//     return (
//         <div>

//         <input onChange={function(e){
//             setInputValue(e.target.value);
//         }}placeholder={"find sum from 1 to n"}></input>

//         <br></br>

//         sum from 1 to n {inputValue} is {count}
        
//         <br></br>

//         <button onClick={() => setCounter(counter + 1)}>
//                 Counter ({counter})
//         </button>

//         </div>
//     );
// }

// export default Memo;

// You're correct! In the code you've provided, the calculation of the count is done inside the render method, 
// which means every time the component re-renders (for example, when inputValue or counter changes), the count is recalculated.

// Why useMemo can help:

// The problem you're pointing out is that the calculation of the count is happening on every render,
//  even though it's only dependent on inputValue. This can be unnecessary and inefficient if the 
// inputValue doesn't change frequently, but the component is re-rendering for some other reason (like updating the counter).

// You can optimize this by using useMemo. useMemo helps in memoizing the result of the expensive operation (like summing numbers) 
// so that it doesn't get recalculated unless its dependencies (inputValue in this case) change.

import { useMemo, useState } from "react";

function Memo() {
    const [counter, setCounter] = useState(0);
    const [inputValue,setInputValue] = useState(1);

   // Use useMemo to memoize the calculation of count
   const count = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= inputValue; i++) {
        sum += i;
    }
    return sum;
}, [inputValue]);  // Recalculate only when inputValue changes
   
    return (
        <div>

        <input onChange={function(e){
            setInputValue(e.target.value);
        }}placeholder={"find sum from 1 to n"}></input>

        <br></br>

        sum from 1 to n {inputValue} is {count}
        
        <br></br>

        <button onClick={() => setCounter(counter + 1)}>
                Counter ({counter})
        </button>

        </div>
    );
}

export default Memo;

//rerly used useMemo but oftennly used useEffect
// Sure! Here's a simpler explanation:

// When we use useMemo, it helps us avoid doing the same work over and over again. In your case, the work is calculating the sum of numbers from 1 to inputValue.

// Normally, every time the component re-renders (for example, when you click the "Counter" button), the sum is recalculated, which can be slow if it's a big number.
// With useMemo, React remembers (or "memoizes") the result of the sum calculation. So, if the inputValue hasn't changed, React doesn't recalculate the sum again — it simply reuses the old result. This saves time and makes your app faster.
// In short, useMemo is like telling React: "Hey, only do the calculation again if inputValue changes. If it doesn't, just use the result from last time."


// In this example, the reused value from useMemo is the result of the sum calculation, which is stored in the count variable.

// Here's how it works:

// Initial Render: When the component first renders, useMemo calculates the sum of numbers from 1 to inputValue and stores it in count.

// Subsequent Renders:

// If inputValue doesn't change (for example, you update the counter using the button but don't change inputValue), useMemo will reuse the previously calculated sum and return the memoized value of count without recalculating it.
// If inputValue changes (for example, you type a new number in the input), useMemo will recalculate the sum for the new inputValue and store it in count again.

// Key differences between useMemo and useEffect:
// useMemo:

// Memoizes values, meaning it remembers the value of a computed result (in this case, the sum of numbers) and only recalculates it if the dependencies change (here, inputValue).
// It’s used for optimizing expensive computations to avoid recalculating the result on every render when it's unnecessary.
// useEffect:

// Executes side effects after the component renders (for example, fetching data, updating the DOM, etc.).
// It doesn't return a value that gets used directly in the render output. Instead, it runs code that might update state or perform actions, but it doesn't "memoize" values like useMemo.
// Why useMemo is better here:
// You're calculating the sum during rendering (inside the return block of the component), and you want to avoid recalculating it every time the component re-renders (even when the inputValue stays the same).
// With useMemo, you can memoize the sum calculation so that it only happens when inputValue changes, improving performance and avoiding unnecessary re-renders.
// Why not useEffect in this case:
// useEffect doesn't store values for direct use in rendering. It’s typically used for side effects that don’t need to affect the component’s immediate output. For example, useEffect could be used to fetch data or manipulate external systems (like interacting with a backend or updating the DOM), but it's not meant to hold computed values like the sum in your case.
// If you used useEffect, you’d need to set state to store the result of the sum, which would involve an extra state update and would cause a re-render. This can become inefficient because you'd be doing extra work (e.g., storing and updating state) when you don’t need to.
// In summary:
// useMemo is ideal for memoizing expensive computations (like summing numbers) that you want to avoid recalculating on each render.
// useEffect is better suited for side effects that are not directly tied to rendering the component, like fetching data or interacting with external resources.

// 1️⃣ useMemo
// 👉 Used inside a component to memorize the result of a calculation so it doesn’t re-run unnecessarily.
// ✅ Yes, you should use useMemo to avoid expensive calculations running repeatedly when the prop has not changed!

// 2️⃣ memo
// 👉 Used on entire components to skip re-renders if props haven't changed.