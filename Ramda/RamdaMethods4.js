/* drop 
Returns all but the first n elements of the given list, string, or transducer/transformer 
(or object with a drop method).
*/

const arr = ['foo', 'bar', 'baz'];
let result = R.drop(1, arr);
console.log(result); // ['bar', 'baz']

result = R.drop(2, arr);
console.log(result); // ['baz']

/* and 
Returns the first argument if it is falsy, otherwise the second argument. 
Acts as the boolean and statement if both inputs are Booleans.
*/
console.log('and');
console.log(R.and(true, true)); // true
console.log(R.and(true, false)); // false
console.log(R.and(false, true)); // false
console.log(R.and(false, false)); // false

/* or 
Returns the first argument if it is truthy, otherwise the second argument. 
Acts as the boolean or statement if both inputs are Booleans.
*/
console.log('or');
console.log(R.or(true, true)); // true
console.log(R.or(true, false)); // true
console.log(R.or(false, true)); // true
console.log(R.or(false, false)); // false
