// 🔹 When to Use Record<string, User>
// You use Record<string, User> when:

// You have multiple users stored in one object.

// Each user is stored under a dynamic key (like an ID).

// Example:

// const users: Record<string, User> = {
//   'abc123': { id: 'abc123', name: 'John' },
//   'xyz789': { id: 'xyz789', name: 'Jane' },
// };
// This is like a user directory or user map, where each key represents a user ID, and each value is a User.


// 🔹 When You Do Not Need Record
// If you're dealing with just one user at a time, like:

// const user1 = {
//   name: "Alice",
//   email: "alice@example.com"
// };
// type UserProfile = {
//   name: string;
//   email: string;
// };

// const displayUserProfile = (user: UserProfile) => {
//   console.log(`Name: ${user.name}, Email: ${user.email}`);
// };

// displayUserProfile(user1);
// ✅ So your understanding is correct:
// ✔️ If you have multiple users in one object — use Record<string, User>
// ✔️ If you are working with just one user — use a simple object type (UserProfile)
// ✅ Renamed the interface to avoid conflicts with other files

interface UserRecord {
  id: string;
  name: string;
}

// ✅ Define a Record with string keys and UserRecord values
type Users = Record<string, UserRecord>;

const users: Users = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

// ✅ Example usage
console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
