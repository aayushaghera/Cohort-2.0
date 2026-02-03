//pass function as an argument


// Function that accepts a callback
function sum(num1, num2, funtoCall) {
    let result = num1 + num2;
    funtoCall(result); // Call the callback function with the result
}

// Define the callback functions
function displayResult(data) {
    console.log("Result of sum is: " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is: " + data);
}

// Call the sum function with the callback
sum(1, 2, displayResult); // This will call displayResult with the result of sum

// Call the sum function with another callback
sum(3, 4, displayResultPassive); // This will call displayResultPassive with the result of sum
