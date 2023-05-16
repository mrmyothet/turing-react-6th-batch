const appendHi = (msg) => 'Hi ' + msg;
const toUpper = (msg) => msg.toUpperCase();

const pipe = (funA, funB) => (x) => funB(funA(x));

// let str = 'hello';
// str = null;
// console.log('Toupper ', toUpper(str));
// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')

// function toUpperCase(msg) {
//   if (msg == null || msg === undefined) {
//     return '';
//   } else {
//     msg.toUpperCase();
//   }
// }
// console.log('Toupper ', toUpper(str));

// Imperative problem
// every function need Error Handling code
// Cross Cutting Concern

const incOne = (x) => x + 1;
const double = (x) => x * 2;
const addTwo = (x) => x + 2;
let result = pipe(incOne, addTwo)(2);
console.log(result);

const MayBe = (value) => ({
  value,
  isNothing() {
    return value === undefined || value === null;
  },
  map(fn) {
    return this.isNothing() ? MayBe(null) : MayBe(fn(value));
  },
});

MayBe.of = MayBe;
let str = 'hello';
let data = MayBe.of(str).map(toUpper).map(appendHi);
console.log('data ', data);
