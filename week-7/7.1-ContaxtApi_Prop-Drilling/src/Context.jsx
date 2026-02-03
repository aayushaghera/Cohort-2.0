import { createContext } from "react";

export const CountContext = createContext(0);

// Understanding createContext(0) in Simple Language 🚀
// 👉 createContext is like creating a shared storage box 📦 
// that multiple components can access without passing props manually.

// ✔ createContext(0) → Creates a new context with 0 as the default value.
// ✔ CountContext → This is the storage box that holds the count value.
// ✔ export → Allows other components to use this context.


//what is prop drilling????
// What is Prop Drilling? (In Simple Words) 🚀
// 👉 Prop drilling happens when you pass data (props) 
// through multiple components to reach a deeply nested child component.

// 🔹 Prop drilling = Passing props through unnecessary components just to reach a deep child.
// 🔹 Problem = Makes code messy & hard to manage.
// 🔹 Solution = Use Context API, Redux, or Zustand to avoid it.

// Prop Drilling happens when a parent component needs to send data (props) to a deeply nested child component, but the data must pass through multiple intermediate components that do not use it. Since React’s default way of passing data is through props,
//  every component in between is forced to receive and pass the data even though it does not need it. This makes the code unnecessarily complex, harder to manage, and less efficient.

// For example, if a top-level component has some important data, but it needs to be accessed by a deeply nested component, we cannot send it directly to the required component. 
// Instead, we have to pass it step by step through each intermediate component, even if they have no use for that data. This unnecessary passing of props through unrelated components is what we call prop drilling.

// This problem becomes worse as the component tree grows, making it harder to maintain and scale. To avoid prop drilling, we can use solutions like the Context API, Redux, or Zustand, 
// which allow us to store data in a central place and provide direct access to the components that actually need it, without forcing intermediate components to handle unnecessary props.