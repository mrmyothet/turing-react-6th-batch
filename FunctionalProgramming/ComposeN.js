const addOne = (x) => x + 1;
const double = (x) => x * 2;
const addFive = (x) => x + 5;

/*
compose multiple functions 
right -> left 
*/

/* Function version 

function composeN(...fns) {
  return function (x) {
    return fns.reduceRight(function (input, fun) {
      // console.log('A ', a, ' B ', b);
      return fun(input);
    }, x);
  };
}
*/

/*
how 'input' is used at 
fns.reduceRight(function(input, fun)) 

composeN(addOne, double, addFive) -> new function 
function(x) - we can accept input parameter in function 
reduce(accumulatorFun, initialValue)
*/

// Arrow version
const composeN =
  (...fns) =>
  (x) =>
    fns.reduceRight((input, fn) => fn(input), x);

let result = composeN(addOne, double, addFive)(2);
console.log('Result ', result);
