"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//without SQL injection
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:123456@localhost/newPostgres"
});
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect(); // Ensure client connection is established
            // Use parameterized query to prevent SQL injection
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ('aayush1', 'aayush1@gmail.com', '1231456')";
            const res = yield client.query(insertQuery);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
//insertData();
//with SQL injection
// Async function to insert data into a table
function insert1Data(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            host: 'localhost',
            port: 5432,
            database: 'newPostgres',
            user: 'postgres',
            password: '123456',
        });
        try {
            yield client.connect(); // Ensure client connection is established
            // Use parameterized query to prevent SQL injection
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
// Example usage
//insert1Data('username5', 'user5@example.com', 'user_password');
function insertAddressOnly(user_id, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            // Insert address data (no select query)
            const insertQuery = `
      INSERT INTO addresses (user_id, city, country, street, pincode)
      VALUES ($1, $2, $3, $4, $5)
    `;
            const values = [user_id, city, country, street, pincode];
            yield client.query(insertQuery, values);
            console.log('✅ Address inserted successfully.');
        }
        catch (error) {
            console.error('❌ Error inserting address:', error);
        }
        finally {
            yield client.end(); // Close DB connection
        }
    });
}
// Run the function
insertAddressOnly(1, 'New York', 'USA', '123 Broadway St', '10001');
// 💉 What is SQL Injection?
// SQL Injection is a hacking technique where someone enters malicious SQL code into a form or input field (like login or search) to trick the database into doing something it’s not supposed to — like showing private data, deleting records, or even taking control of the database.
// 🎯 Real-Life Example (Login Form)
// Imagine this login form:
// SELECT * FROM users WHERE username = 'input' AND password = 'input';
// Now let’s say the attacker types this as the username:
// ' OR '1'='1
// And leaves the password blank.
// The query becomes:
// SELECT * FROM users WHERE username = '' OR '1'='1' AND password = '';
// Now look at this:
// '1'='1' is always true
// So the database logs in the attacker without a valid username or password 😲
// 🧨 What can go wrong?
// With SQL injection, an attacker might:
// Log in without credentials
// View private data (like passwords, emails)
// Delete tables or the entire database!
// Steal or manipulate sensitive info
// 🔐 How to prevent SQL Injection?
// ✅ Use Prepared Statements / Parameterized Queries
// Instead of building SQL by joining strings, use secure placeholders.
// ✅ Validate user input
// Never trust user input blindly.
// ✅ Limit database permissions
// Don't give full access unless absolutely necessary.
// 🛡️ Example of Safe Query:
// Bad (Vulnerable to injection):
// String sql = "SELECT * FROM users WHERE username = '" + user + "'";
// Good (Safe):
// PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE username = ?");
// stmt.setString(1, user);
// Let me know if you want a code demo or animation-style explanation for better understanding!
//  What Can Go Wrong with SQL Injection?
// 1. Log in without credentials
// 🔓 A hacker can "fool" the login form to bypass username & password checks.
// Example:
// Suppose your code does this:
// SELECT * FROM users WHERE username = 'input' AND password = 'input';
// Now, a hacker enters:
// Username: ' OR '1'='1
// Password: (blank)
// The SQL becomes:
// SELECT * FROM users WHERE username = '' OR '1'='1' AND password = '';
// Since '1'='1' is always true, it tricks the system to log in without knowing any username or password.
// 2. View private data (like passwords, emails)
// 🕵️ A hacker can write SQL to grab hidden data.
// Example:
// If your app has a search feature like:
// SELECT * FROM users WHERE name = 'input';
// A hacker can try:
// ' OR 1=1 --
// Resulting query:
// SELECT * FROM users WHERE name = '' OR 1=1 --';
// -- is a comment in SQL, so the rest is ignored.
// Now the query returns ALL users — including passwords, emails, etc.
// 3. Delete tables or the entire database!
// 🧨 Some attackers don’t steal — they destroy.
// If an input box allows raw SQL and isn’t protected, the attacker could enter something like:
// '; DROP TABLE users; --
// The SQL becomes:
// SELECT * FROM users WHERE name = ''; DROP TABLE users; --';
// This will:
// Select nothing (fine)
// BUT also run: DROP TABLE users; 💥💀
// Your entire users table is gone!
// 4. Steal or manipulate sensitive info
// 🎭 Hackers can change or insert wrong info.
// Example:
// Change someone's role from user to admin
// Transfer money from one account to another
// 🔐 How to Prevent SQL Injection?
// ✅ 1. Use Prepared Statements / Parameterized Queries
// 🧱 Like building with LEGO blocks instead of gluing stuff — stronger, safer.
// Prepared statements let you write queries with placeholders like this:
// PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE username = ? AND password = ?");
// stmt.setString(1, userInputUsername);
// stmt.setString(2, userInputPassword);
// This ensures:
// SQL and data are separate
// Hacker input is treated only as data, not as part of the SQL
// Even if someone tries to enter ' OR 1=1 --, it won't work — because it's just a string, not actual code.
// ✅ 2. Validate user input
// 🧼 Always clean and check what users are typing.
// Examples:
// For name fields, allow only letters: no ; or '
// For age, allow only numbers
// For emails, check format
// This prevents dangerous characters or logic from reaching your SQL query.
// ✅ 3. Limit Database Permissions
// 🚧 Don't give full control to every part of your app.
// Set roles in your database:
// The app that shows data should not have permission to delete tables
// A login system only needs read access to users, not to payments
// So even if someone tries SQL injection, the damage is limited.
// 🧠 Final Tip:
// Always treat user input like a stranger at your door —
// Don’t let them in without checking their ID! 😄
// If you're building something in Java, PHP, or Node.js, and want code examples for this, just ask!
// You said:
// '; DROP TABLE users; --  if user or hacker type this so entire table is ddlet right so using sql injection this type of is prevent right ???
// ChatGPT said:
// Yes, exactly — you understood it right! ✅
// If a hacker types this in an input field:
// '; DROP TABLE users; --
// And your SQL query is written unsafely, like this:
// String query = "SELECT * FROM users WHERE username = '" + userInput + "'";
// Then it becomes:
// SELECT * FROM users WHERE username = ''; DROP TABLE users; --';
// 💥 This means:
// First, it searches for an empty username.
// Then, it executes the DROP TABLE users command!
// -- tells SQL to ignore the rest of the line (comment).
// So yes — the entire table will be deleted. 😱
// 🛡️ How to Prevent This (Recap):
// ✅ Use Prepared Statements (Java Example):
// PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE username = ?");
// stmt.setString(1, userInput); // even if input is '; DROP TABLE users; --
// ➡️ Now, the input is treated as plain text, not part of the SQL code.
// ✅ Result:
// The malicious input cannot break or delete your table.
// The database understands it's just a string, not a command.
// So yes, SQL Injection like '; DROP TABLE users; -- is stopped by using prepared statements or parameterized queries — and that’s why they are so important in real-world projects. 🔒
// Want me to show full working Java or Node.js example of this?
