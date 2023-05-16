/* Functor
is a container - that wrap something 
monoid with map 
*/

// let count = 1;
// count = count + 1;
// problem is mutable

const identity = (x) => x;
const Container = (value) => ({
  value,
  map(fn) {
    return Container(fn(value));
  },
});
Container.of = Container;

const count = Container.of(2);
console.log('Count ', count);

const incOne = (x) => x + 1;
const double = (x) => x * 2;
const addTwo = (x) => x + 2;

// function chain and immutablity
let result = count.map(incOne).map(addTwo).map(double);

console.log('Count funtor', result);
console.log('Count ', count);
console.log('value', result.value);

// Laws of Functor
// Rule 1: map id = id
// Rule 2: map (g . h) = (map g) . (map h)

let result2 = count.map(identity);
console.log(
  'Rule1: Result2.value == count.value ',
  result2.value == count.value
);

// map (g . h) = (map g) . (map h)
const pipe = (funA, funB) => (x) => funB(funA(x));

let newFunc = pipe(incOne, addTwo);
let result3 = count.map(newFunc);

let result4 = count.map(incOne).map(addTwo);
console.log(
  'Rule 2: map (g . h) = (map g) . (map h) ',
  result3.value == result4.value
);
