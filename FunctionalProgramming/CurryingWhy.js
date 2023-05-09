// Composability

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const addFive = (x) => x + 5;

// const sum = (x, y) => x + y;

// Currying
// If currying function is called with less arguments - Partial Application (Partial Apply)
// Currying is useful for composition

/*

function sum(x) {
  return function (y) {
    return x + y;
  };
}

*/

const sum = (x) => (y) => x + y;

// console.log('Sum ', sum(2)(3));

function pipeN(...fns) {
  return function (x) {
    return fns.reduce(function (input, fun) {
      return fun(input);
    }, x);
  };
}

// tap - use currying
const tap = (fn) => (val) => (fn(val), val);
const log = tap(console.log);

// cannot use sum function in pipe without currying
// sum(3) is apply partial - 1 argument instead of 2 arguments - Partial Application
let result = pipeN(log, sum(3), log, double, log)(2);

console.log(result);
