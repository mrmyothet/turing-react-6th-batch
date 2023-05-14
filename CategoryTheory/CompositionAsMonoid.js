const identity = (x) => x;

const compose = (funA, funB) => (x) => funA(funB(x));
var Composition = { empty: () => identity, concat: compose };

const incOne = (x) => x + 1;
const double = (x) => x * 2;
const addTwo = (x) => x + 2;

var fold = function (array, monoid) {
  var accumulation = monoid.empty();
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    accumulation = monoid.concat(accumulation, element);
  }
  return accumulation;
};

let func = fold([incOne, double, addTwo], Composition);
console.log(func(3));
