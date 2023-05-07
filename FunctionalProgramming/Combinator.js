const identity = (x) => x;
console.log('Identity ', identity(3));

// Kestral (K) Combinator
const K = (a) => (b) => a;
console.log('K ', K(3)(2));
// In lambda calculus -> to get true/false

// Tap

// to generator log

const addOne = (x) => x + 1;
const double = (x) => x * x;
const addFive = (x) => x + 5;

function pipeN(...fns) {
  return function (x) {
    return fns.reduce(function (input, fun) {
      return fun(input);
    }, x);
  };
}

const tap = (fn) => (val) => (fn(val), val);
const log = tap(console.log);

let result = pipeN(addOne, log, double, log, addFive, log)(2);

console.log(result);

// will provide real-world use case for composition
