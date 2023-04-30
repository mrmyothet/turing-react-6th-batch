// to use the whole code segment as a unit
// to re-use
// abstraction
// decomposition - solve the big problem using many small functions
// function is callable object in javascript

// console.log('Hi, How are you ');
// console.log('Good afternoon');
// console.log('Hello ');

// console.log('Hi, How are you ');
// console.log('Good afternoon');
// console.log('Hello ');

// console.log('Hi, How are you ');
// console.log('Good afternoon');
// console.log('Hello ');

// function definition
function hello() {
  console.log('Hi, How are you ');
  console.log('Good afternoon');
  console.log('Hello ');
}

// function call, invoke, execute
hello();
// hello();
// hello();

// name and lenght of function
console.log('Name ', hello.name);
console.log('Length ', hello.length);

// function header  - function hello()
// function body    - { lines of code }

// Function Declarations - can define functions in 3 ways

// Function Expression - return function as value
const fun = function () {
  console.log('Function fun executed');
};
fun();

// Arrow Function
const fun2 = () => console.log('Hello');

// const fun2 = () => {
//   console.log('Hello');
//   console.log('World');
// };

fun2();

// provide as eval
// not best practice
let fun3 = new Function('', 'console.log("Hello from fun3");');
fun3();
