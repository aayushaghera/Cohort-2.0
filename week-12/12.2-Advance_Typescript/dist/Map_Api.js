"use strict";
// "If we already have Record<string, Value>, why should we use Map<string, Value>?"
// Let’s break it down simply, and then compare Record vs Map with real differences and reasons.
// Initialize an empty Map with string keys and User values
const usersMap = new Map();
// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
// ✅ Yes, both Record and Map are key-value pairs, but they are used differently in TypeScript and JavaScript:
// 🧾 Record (TypeScript only)
// Record is a TypeScript utility type.
// It helps you define the shape of an object at compile time (for type checking).
// It works only during development — it doesn't exist in the final JavaScript code.
// Example:
// type Users = Record<string, string>;
// const users: Users = {
//   "aayush": "developer",
//   "john": "designer",
// };
// 🗂️ Map (JavaScript + TypeScript)
// Map is a real JavaScript object available at runtime.
// It lets you store key-value pairs, where keys can be of any type (even objects).
// It’s more flexible and has built-in methods like .set(), .get(), .delete().
// Example:
// const userMap = new Map<string, string>();
// userMap.set("aayush", "developer");
// userMap.set("john", "designer");
// 🧠 In short:
// Use Record when you want type-safe key-value objects in TypeScript.
// Use Map when you need runtime features and flexibility in JavaScript/TypeScript.
