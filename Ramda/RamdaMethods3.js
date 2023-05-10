const substract = (a) => (b) => a - b;
let result = substract(5)(3);
console.log('Subtract ', result);

const C = (f) => (a) => (b) => f(b)(a);
const flippedSubtract = C(substract);
result = flippedSubtract(5)(3);
console.log('Flipped Subtract ', result);

/* flip
Returns a new function much like the supplied one, 
except that the first two arguments' order is reversed.
*/

let arr = [1, 2, 3, 4, 5];
/*
sum/length 
*/
result = R.sum(arr);
console.log('Sum, ', result);
// console.log('Average ', R.divide(R.sum, R.length)(arr));

// flip use case
// 5/2 , divide(5,2), divide(5)(2)
// want to provide 2 first
// divide(2)(5)

let formula = R.pipe(R.flip(R.divide)(2));
console.log(formula(5));

// apply - to able to compose - use function - instead of method
const nums = [1, 2, 3, -99, 42, 6, 7];
result = R.apply(Math.max, nums);
console.log('Apply ', result);

// prop
// Returns a function that when supplied an object
// returns the indicated property of that object, if it exists.

let obj = {
  name: 'Tk',
  age: 38,
  address2: {
    city: 'Ygn',
    township: 'Somewhere',
  },
};
const getAge = R.prop('age');
console.log(getAge(obj));

console.log(R.prop('age')(obj));
console.log('Increment Age ', R.compose(R.inc, R.prop('age'))(obj));

/* path 
Retrieves the value at a given path. 
The nodes of the path can be arbitrary strings or non-negative integers. 
For anything else, the value is unspecified. 
Integer paths are meant to index arrays, strings are meant for objects.
*/

// console.log(obj.address.city);
//caught TypeError: Cannot read properties of undefined (reading 'city')

console.log('Path ', R.path(['address', 'city'])(obj));
// It is safe when there is no address

console.log('PathOr ', R.pathOr('Unknown address', ['address', 'city'])(obj));
