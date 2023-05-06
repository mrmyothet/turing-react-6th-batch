// pure functions
const toUpper = (msg) => msg.toUpperCase();
const appendHi = (msg) => 'Hi ' + msg;

// looks like - Imperative approach
// Problem - hard to test
function appendHiAndToUpper(msg) {
  let result = appendHi(msg);
  return toUpper(result);
}

console.log('AppendHi ', appendHiAndToUpper('Hello'));

/*

function composition 

f = x => y
g = y => z 

(g (f x))

*/

function compose(FnA, FnB) {
  return function (msg) {
    return FnA(FnB(msg));
  };
}

let result = toUpper(appendHi('hello'));
console.log(result);

let newFn = compose(toUpper, appendHi);
result = newFn('morning');
console.log(result);

let newFn2 = compose(appendHi, toUpper);
result = newFn2('afternoon');
console.log(result);

const addOne = (x) => x + 1;
const double = (x) => x * 2;
newFn = compose(double, addOne);

result = newFn(3);
console.log(result);

/* composable function
- one output -> input of another
- function can return 1
- single input -> single output

- mismatch input type -> problem 
f = x => y [string]
g = y => z 

(g (f x))

*/

newFn = compose(appendHi, addOne);
result = newFn(3);
console.log(result); // Hi 4
