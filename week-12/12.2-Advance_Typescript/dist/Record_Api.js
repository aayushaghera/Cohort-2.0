"use strict";
// 🔹 When to Use Record<string, User>
// You use Record<string, User> when:
const users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
// ✅ Example usage
console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
