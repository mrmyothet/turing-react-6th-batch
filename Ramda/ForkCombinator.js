let arr = [1, 2, 3, 4, 5, 6, 7];
/*
div(sum/length)(arr)
*/

// Fork Implementation
const length = (array) => array.length;
const sum = (array) => array.reduce((a, b) => a + b, 0);
const divide = (a, b) => a / b;

const fork = (join, fn1, fn2) => (value) => join(fn1(value), fn2(value));

const arithmeticAverage = fork(divide, sum, length);
console.log('Average ', arithmeticAverage(arr));

// R.converge - fork combinator
// Accepts a converging function and a list of branching functions
// and returns a new function.
const average = R.converge(R.divide, [R.sum, R.length]);
let result = average(arr);
console.log('Average ', result);
