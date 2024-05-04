// Part 1: Stack Overflow
// Calculate the maximum size of the JavaScript call stack.

let counter = 0;

function incrementForever() {
  counter++;
  incrementForever();
}

try {
    incrementForever();
} catch (err) {
  console.log(err);
  console.log("The maximum size of the JavaScript call stack is a " + counter);
}