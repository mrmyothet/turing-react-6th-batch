// variable length arguments
// ...args must be right side of the parameters
function max(a, ...args) {
  console.log(args);
  // console.log(Array.isArray(args));// true
  //   console.log(arguments);
  // console.log(Array.isArray(arguments)); // false

  // args - Array
  // arguments - Array like Object
}

max(1, 2, 3);

// max(10, 20, 30);
// Sperad Operator - Array Destructuring
let arr = [30, 20];
max(10, ...arr);

// Object Destructuring
function display({ name, age }) {
  console.log(name, age);
}
let obj = {
  name: 'Tk',
  age: 38,
};
display(obj);
