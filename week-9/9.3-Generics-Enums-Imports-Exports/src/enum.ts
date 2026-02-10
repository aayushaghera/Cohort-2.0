// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, 
// which might otherwise be represented as numbers or strings


// Think of enum like a menu of fixed options. 
// Instead of typing options by hand (and risking typos), 
// you select from the menu. TypeScript then makes sure you only pick what's on the lis

// Example 1 - Game 
// Let’s say you have a game where you have to perform an action based on weather 
// the user has pressed the up arrow key, down arrow key,
// left arrow key or right arrow key

enum Direction {
    Up,  //0
    Down,//1
    Left,//2
    Right//3
}


// enum Direction {
//     Up = 1,  //1
//     Down,//2
//     Left,//3
//     Right//4
// }

// enum Direction {
//     Up = "UP",
//     Down = "Down",
//     Left = "Left",
//     Right = 'Right'
// }

function doSomething(keyPressed: Direction) {
	// do something.
    if(keyPressed == Direction.Up)
    {
           console.log("Going Up");
    }
}

doSomething(Direction.Up);
console.log(Direction.Up);