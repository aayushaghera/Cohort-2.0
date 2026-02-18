// interface User {
// 	name: string;
// 	age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// };

// // Example usage
// const result = sumOfAge({
// 	name: "harkirat",
// 	age: 20
// }, {
// 	name: "raman",
// 	age: 21
// });
// console.log(result); // Output: 41

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// Creating a new type with only `name` and `email` properties from `User`
type UserProfile = Pick<User, 'name' | 'email'>;

// Function that accepts a UserProfile type
const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

const user1 = {
  name: "Alice",
  email: "alice@example.com"
};

displayUserProfile(user1);


// The Pick utility type in TypeScript is a handy tool that lets you create a new type by choosing only specific properties 
// from an existing one. This is especially useful when you’re working with a large or complex object type, but only need to use 
// a few of its properties. Instead of writing a new type from scratch, Pick allows you to reuse parts of an existing type, making
//  your code cleaner and more maintainable. For example, if you have a User type that contains information like id, name, email,
//  and createdAt, but you only need name and email for a user profile display, you can use Pick to create a new type with just 
// those two properties. This helps improve type safety because TypeScript will make sure you're only using the allowed properties, 
// and it also makes your code easier to understand and reduces repetition. In short, Pick helps you focus on exactly the data you need,
//  while still keeping everything organized and error-free.


// ✅ Original Concept:
// "The Pick utility type in TypeScript is a powerful feature that allows you to construct new types by selecting a subset of properties from an existing type."

// 🟢 In Simple Version:

// "Pick is a handy tool that lets you create a new type by choosing only specific properties from an existing one."

// ✅ Original Concept:
// "This can be particularly useful when you need to work with only certain fields of a complex type..."

// 🟢 In Simple Version:

// "...especially useful when you’re working with a large or complex object type, but only need to use a few of its properties."

// ✅ Original Concept:
// "The syntax for Pick is: Pick<Type, Keys>"

// 🟢 In Simple Version:

// I didn’t restate the syntax directly (to keep it simple), but I explained the concept using a real example.

// ✅ Original Concept (Example with User, UserProfile, displayUserProfile)
// 🟢 In Simple Version:

// I explained the exact same example:
// "...if you have a User type... but only need name and email... you can use Pick to create a new type with just those two properties."

// ✅ Original Concept:
// Benefits of Pick:

// Enhanced Type Safety

// Code Readability

// Reduced Redundancy

// 🟢 In Simple Version:

// ✔️ Type safety: "...TypeScript will make sure you're only using the allowed properties..."
// ✔️ Readability: "...makes your code easier to understand..."
// ✔️ DRY/Reduced redundancy: "...reduces repetition."

// ✅ Conclusion (Your Quote):
// "It allows you to be explicit about what properties a function or component expects..."

// 🟢 In Simple Version:

// "...helps you focus on exactly the data you need, while still keeping everything organized and error-free."

