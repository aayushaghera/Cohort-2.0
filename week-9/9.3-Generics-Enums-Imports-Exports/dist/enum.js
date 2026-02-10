"use strict";
// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, 
// which might otherwise be represented as numbers or strings
// Example 1 - Game 
// Let’s say you have a game where you have to perform an action based on weather 
// the user has pressed the up arrow key, down arrow key,
// left arrow key or right arrow key
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    // do something.
    if (keyPressed == Direction.Up) {
        console.log("Going Up");
    }
}
doSomething(Direction.Up);
