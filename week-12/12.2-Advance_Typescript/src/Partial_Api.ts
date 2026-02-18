// // Define the User interface
// interface User {
//   id: string;
//   name: string;
//   age: string;
//   email: string;
//   password: string;
// }

// // Define a type for updating user properties (all optional)
// type UpdateProps = {
//   email?: string;
//   age?: string;
//   password?: string;
// };

// // Example function to update user data
// function updateUser(updatedProps: UpdateProps) {
//   // Here you would hit the database to update the user
//   // For example:
//   // app.put('/user/:id', (req, res) => {
//   //   const updatedUser = updateUser(req.body);
//   //   res.send(updatedUser);
//   // });

//   console.log("Updating user with:", updatedProps);
// }


// In your above example:
// You first defined the User type, and then manually created another type UpdateProps just for updating users:

// type UpdateProps = {
//   email?: string;
//   age?: string;
//   password?: string;
// };
// This works, but it's repeating the same fields already written in User.

// ✅ Why Partial<User> is better in APIs:
// When you're building an API — especially an update route like:

// app.put('/user/:id', (req, res) => {
//   updateUser(req.body);
// });
// You don't want to write the same fields twice, once in User and again in UpdateProps. That's not only extra work, but also dangerous — because if you change a field in User later, and forget to change it in UpdateProps, your code might break or behave unexpectedly.

// ✅ Partial<User> solves this:
// type UpdateProps = Partial<User>;
// Now:

// You don’t repeat anything.

// All fields from User are included.
// They are all optional (which makes sense for updates).
// If you change User, the update type stays in sync automatically.
// 🟢 Final version using Partial:

// interface User {
//   id: string;
//   name: string;
//   age: string;
//   email: string;
//   password: string;
// }

// type UpdateProps = Partial<User>;
// function updateUser(updatedProps: UpdateProps) {
//   console.log("Updating user with:", updatedProps);
// }

// ✅ Summary in simple words:
// In APIs, we use Partial<User> because it avoids writing the same thing twice. It keeps our code clean,
//  short, and safe. If the User type changes, the update logic still works without fixing things in multiple places.


interface User {
    id: number;
    name: string;
    age: string;
    email: string;
    password: string;
};

// Selecting 'name', 'age', and 'email' properties from User
type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// Making the selected properties optional
type UpdatePropsOptional = Partial<UpdateProps>

// Function that accepts an object with optional 'name', 'age', and 'email' properties
function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database to update the user
     console.log(`Name: ${updatedProps.name}, Email: ${updatedProps.email}`);
}

// Example usage of updateUser
updateUser({ name: "Alice" }); // Only updating the name
updateUser({ age: "30", email: "alice@example.com" }); // Updating age and email
updateUser({}); // No updates, but still a valid call