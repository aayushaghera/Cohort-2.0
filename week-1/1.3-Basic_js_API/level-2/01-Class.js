
class Animal {
  constructor(name, legCount, sound) {
    this.name = name;
    this.legCount = legCount;
    this.sound = sound; // Correct assignment
  }
  speak() {
    console.log("hi there " + this.sound); // Use this.sound
  }

  names(){
    console.log("hi there" +this.name);
  }

  static myType()
  {
    console.log("animal");
  }
} 

let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow");
cat.names(); // This will now correctly log "hi there meow"
dog.names();


//static method we have to call  direcly without to make a class object static method call directly using class name 
//non static method call you have to must create a object of a class and then you call non static method