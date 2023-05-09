const addOne = (x) => x + 1;
const double = (x) => x * 2;
const addFive = (x) => x + 5;

/*
compose multiple functions 
right -> left 
*/

function pipeN(...fns) {
  return function (x) {
    return fns.reduce(function (input, fun) {
      // console.log('A ', a, ' B ', b);
      return fun(input);
    }, x);
  };
}

let result = pipeN(addOne, double, addFive)(2);
console.log(result);
