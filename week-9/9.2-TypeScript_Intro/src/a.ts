// how to run 
// tsc -b
// node filename.js


const x: number = 1;
console.log(x);

// const x: any = 1;
// function greet(firstName :any){
//     console.log("hello " + firstName)
// }


// function greet(firstName :string){
//     console.log("hello " + firstName)
// }
// greet("aayush");

// function sum(a:number , b: number): number{
//     return a + b;
// }
// const value = sum(1,2);
// console.log(value);

// function isLegal(age: number):boolean {
//     if (age > 18) {
//         return true;
//     } else {
//         return false
//     }
// }
// console.log(isLegal(2));


function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}
delayedCall(function() {
    console.log("hi there");
}) 




//  Example without noImplicitAny (default false):

// ts
// Copy code
// function greet(name) {
//   console.log("Hello, " + name);
// }
// Here, name has no type.

// TypeScript silently assumes it's any. ✅ No error.

// ⚠️ With "noImplicitAny": true
// ts
// Copy code
// function greet(name) {
//   console.log("Hello, " + name);
// }
// ❌ Error: Parameter 'name' implicitly has an 'any' type.

// ✅ Fix it like this:

// ts
// Copy code
// function greet(name: string) {
//   console.log("Hello, " + name);
// }
// ✅ Why it's useful:
// Prevents mistakes by forcing you to be explicit about types.

// Helps catch missing or incorrect types early.

// Makes your code more readable and maintainable.

// 🔚 Summary:
// Option	Behavior
// noImplicitAny: false	Allows missing types — assumes any silently (unsafe)
// noImplicitAny: true	❌ Error if TypeScript can't figure out the type — encourages safer code

// Would you like a list of other useful TypeScript compiler options too?


//es2016 how to work

// ✅ Yes, your understanding is absolutely right! Let’s break it down step by step with a simple explanation:

// 🧠 Your Statement:
// "We write arrow function in TypeScript, and we set target to es5. Since ES5 does not understand arrow functions, the TypeScript compiler converts it into a normal function."

// 👉 ✅ This is 100% correct!

// 🎯 Let’s visualize it:
// ➤ You write this in TypeScript:
// ts
// Copy code
// const greet = (name: string) => console.log("Hello, " + name);
// ➤ In your tsconfig.json, you have:
// json
// Copy code
// {
//   "compilerOptions": {
//     "target": "es5"
//   }
// }
// ➤ What happens during compilation?
// TypeScript knows:

// "Oh, you want this to work with ES5 (which is old and doesn’t know arrow functions)..."

// So, it will convert your arrow function to a regular function like this:

// js
// Copy code
// var greet = function (name) {
//     console.log("Hello, " + name);
// };
// 💡 Why this happens:
// ES5 (released in 2009) doesn't support:

// Arrow functions

// let and const

// Classes

// Modules

// etc.

// TypeScript’s job is to make sure your code runs on the environment you target — so it "transpiles" or "down-levels" modern syntax into old syntax if needed.

// 🏁 Conclusion:
// ✅ Yes, your statement is correct:

// "If we write arrow functions in TypeScript and set the target to ES5, TypeScript converts them to normal functions because ES5 doesn't support arrow functions."



// difference between npm and npx 
// Use This	When
// npm	When you want to install and manage dependencies in your project
// npx	When you want to run a package or CLI tool temporarily without installing it globally