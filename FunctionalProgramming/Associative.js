// x * (y * z ) = (x * y) * z = xyz
// multiplication is associative

// a + b + c
// plus is also associative

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const addFive = (x) => x + 5;

function pipeN(...fns) {
  return function (x) {
    return fns.reduce(function (input, fun) {
      // console.log('A ', a, ' B ', b);
      return fun(input);
    }, x);
  };
}

let result = pipeN(addOne, double, addFive)(2);
console.log(result); //11

let formula = pipeN(addOne, pipeN(double, addFive));
console.log(formula(2)); //11

formula = pipeN(pipeN(addOne, double), addFive);
console.log(formula(2)); //11

// function composition are associative
// Advantages : can compute parallel
