let arr = [1, 2, 3, 4];
let newArr = [];

// Imperative approach
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] * 2);
}
// can do mistake in the loop, increment etc.

// Declarative approach
// Focus on what
// Higher level abstraction
// Pure Functions -> Testable code
let doubleArr = arr.map((ele) => ele * 2);

console.log(arr);
console.log(newArr);
console.log(doubleArr);
