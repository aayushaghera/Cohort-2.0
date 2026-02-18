"use strict";
//3] Readonly
const config = {
    endpoint: '<https://api.example.com>',
    apiKey: 'abcdef123456',
};
// Attempting to modify the object will result in a TypeScript error
// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
// In this example, `config` is an object that cannot be modified after its initialization. Trying to reassign `config.apiKey` will result in a compile-time error, ensuring the immutability of the `config` object.
// ### Benefits of Using `Readonly`
// 1. **Immutability**: Ensures that objects are immutable after they are created, preventing accidental modifications.
// 2. **Compile-Time Checking**: The immutability is enforced at compile time, catching potential errors early in the development process.
// 3. **Clarity and Intent**: Using `Readonly` clearly communicates the intent that an object should not be modified, making the code easier to understand.
// ### Important Note
// It's crucial to remember that the `Readonly` utility type enforces immutability at the TypeScript level, which means it's a compile-time feature. JavaScript, which is the output of TypeScript compilation, does not have built-in immutability, so the `Readonly` constraint does not exist at runtime. This distinction is important for understanding the limitations of `Readonly` and recognizing that it's a tool for improving code quality and safety during development.
// > The `Readonly` utility type is a valuable feature in TypeScript for creating immutable objects. By preventing reassignment of properties, it helps maintain the integrity of objects that represent fixed configurations or constants.
// >
// ✅ Simple Explanation of an Object in Programming:
// An object is a container that holds related data and actions (called properties and methods).
// You can think of it like a real-world thing that has:
// Properties (values) — what it has
// Methods (functions) — what it can do
