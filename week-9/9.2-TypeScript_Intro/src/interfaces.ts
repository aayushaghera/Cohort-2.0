// To assign a type to the user object, you can use interfaces
//1. What are interfaces

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}

isLegal({
	firstName: "harkirat",
	lastName: "singh",
	age: 21,
})