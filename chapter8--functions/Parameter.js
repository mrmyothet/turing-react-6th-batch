// Arguments Vs Parameters

// function greet() {
//     console.log('Hi');
// }
// greet();
// greet();

// Pass parameter into function
// provide input to the function
function greet(name) {
  console.log('Hi ' + name);
}
greet('Aung Aung ');
greet('Maung Maung');

// x, y -> parameter
function add(x, y) {
  console.log(arguments);
  return x + y;
}

// when return - function is stop
// return value is replace at the place of function - add(10,2)
let result = add(10, 2); // 10, 2 -> arguments
console.log(result);
