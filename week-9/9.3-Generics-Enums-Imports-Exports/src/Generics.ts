// type Input = number | string

// function FirstEl(arr: Input[])
// {
//     return arr[0]
// }

// const value = FirstEl([1,"aayush"]);
// value.toUpperCase() error in this line bcz we use 
// number or string both so type is Input not number or string seperatelly
// we use only string type so error do not come 

// type Input =  string

// function FirstEl(arr: Input[])
// {
//     return arr[0]
// }

// const value = FirstEl(["aayush"]);
// value.toUpperCase()

// we have solution of above problem that called generic

// Without generics, you'd write a separate function for each type:
// function identityString(arg: string): string {
//     return arg;
// }

// function identityNumber(arg: number): number {
//     return arg;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// What does this mean?
// identity<T>: You're creating a generic function named identity with a type parameter T.

// arg: T: It takes one argument of type T.

// : T: It returns the same type T.

// So whatever type you give it, it takes that and gives the same type back

// let output1 = identity<string>("myString");

// T becomes string

// So arg: string → returns string

// output1 is "myString" (type: string)

// ✅ TypeScript now knows that output1 is a string. It can help with autocomplete, warnings, etc.

// let output2 = identity<number>(100);

// T becomes number

// So arg: number → returns number

// output2 is 100 (type: number)

// ✅ Now output2 is known to be a number.






// Solution to original problem

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())


function getFirstElement2<T>(arr: T[]) {
    return arr[0];
}

const el2 = getFirstElement2<string>(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())



function getFirstElement1<T>(arr: T[]) {
    return arr[0];
}

const el1 = getFirstElement1<(string | number)>(["harkiratSingh", 2]);
console.log(el.toLowerCase())