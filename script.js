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

// Part 2: Trampolines
//Write a recursive function that completely flattens an array of nested arrays, 
//regardless of how deeply nested the arrays are.

// original nested array:
const arr = [[1, [2, 3, [[4, 5], 6]], 7], 8, 9];

// array that will store flattened values:
const result = [];


//https://dev.to/babak/understanding-recursion-using-iteration-or-vice-versa-3l5o
//("Bonus: Other Ways To Solve Recursively")
function flattenArrNoEncapsulationNotPure( arr, result = [] ) {
    for( let item of arr ) {
      if( Array.isArray(item) ) {
        flattenArrNoEncapsulationNotPure( item, result ) 
      } else {
        result.push( item )
      }
    }
    return result
  }

// flatten the array recursively
flattenArrNoEncapsulationNotPure(arr, result);

// output the flattened array
console.log(result);