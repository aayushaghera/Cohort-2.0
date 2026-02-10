// Assignment #2 - Create a React component that takes todos as an input and renders them
import './App.css'
function App() {
  return (
    <>
      <Todo
        title = "hi"
        description = "hello"
        done = {false}
        ></Todo>
    </>
  )
}

// Todo.tsx
interface TodoProp {
  title: string;
  description: string;
  done: boolean;
}

function Todo(props: TodoProp) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    
  </div>
}

export default App

// 2. Implementing interfaces
// Interfaces have another special property. You can implement interfaces as a class.

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee("aayush" , 21);
console.log(e.name);
console.log(e.greet("heloo"));

// What are types?
// Very similar to interfaces , types let you aggregate data together.

// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }
// interface User2{
//   firstName: string;
// 	lastName: string;
// 	age: number
// }

// function isLegal(users:User){

// }

// isLegal

// 1. Unions
// Let’s say you want to print the id of a user, which can be a number or a string.

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

// 2. Intersection
// What if you want to create a type that has every property of multiple types/ interfaces

// type Employee1 = {
//   name: string;
//   startDate: Date;
// };

// type Manager1 = {
//   name: string;
//   department: string;
// };

// type TeamLead = Employee1 & Manager1;

// const t: TeamLead = {
//   name: "aayush",
//   startDate: new Date(),
//   department: "Software developer"
// };

// Example 1 
// Given an array of positive integers as input, return the maximum value in the array
function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));

// Example 2 
// Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User3 {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User3[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));


// interface implement by class 
// type do not implement and type also have unioun and intersection 