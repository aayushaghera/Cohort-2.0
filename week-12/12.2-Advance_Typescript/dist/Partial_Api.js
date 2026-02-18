"use strict";
// // Define the User interface
// interface User {
//   id: string;
//   name: string;
//   age: string;
//   email: string;
//   password: string;
// }
;
// Function that accepts an object with optional 'name', 'age', and 'email' properties
function updateUser(updatedProps) {
    // hit the database to update the user
    console.log(`Name: ${updatedProps.name}, Email: ${updatedProps.email}`);
}
// Example usage of updateUser
updateUser({ name: "Alice" }); // Only updating the name
updateUser({ age: "30", email: "alice@example.com" }); // Updating age and email
updateUser({}); // No updates, but still a valid call
