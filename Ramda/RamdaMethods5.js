/* groupBy
Splits a list into sub-lists stored in an object, 
based on the result of calling a key-returning function on each element, 
and grouping the results according to values returned.
*/

const byGrade = R.groupBy(function (student) {
  const score = student.score;
  return score < 65
    ? 'F'
    : score < 70
    ? 'D'
    : score < 80
    ? 'C'
    : score < 90
    ? 'B'
    : 'A';
});
const students = [
  { name: 'Abby', score: 84 },
  { name: 'Eddy', score: 58 },
  { name: 'Jack', score: 69 },
];

let result = byGrade(students);
console.log(result);

let arr = [
  { name: 'Tk', gender: 'male' },
  { name: 'Hla Hla', gender: 'female' },
  { name: 'Aung Aung', gender: 'male' },
  { name: 'Mya Mya', gender: 'female' },
];

const byGender = R.groupBy((student) => student.gender);
result = byGender(arr);
console.log(result);

/* groupWith
Takes a list and returns a list of lists 
where each sublist's elements are all satisfied pairwise comparison 
according to the provided function. 
Only adjacent elements are passed to the comparison function.
*/

const gender = (student) => student.gender;
result = R.groupWith(gender)(arr);

/* pair
Takes two arguments, fst and snd, and returns [fst, snd].
*/
const returnArr = R.pair('first', 'second');
console.log(returnArr);

const head = R.head(returnArr);
console.log(head);

const tail = R.tail(returnArr);
console.log(tail);

/* eqProps
Reports whether two objects have the same value, in R.equals terms, for the specified property. 
Useful as a curried predicate.
*/

const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = { a: 10, b: 20, c: 3, d: 40 };

result = R.eqProps('a', obj1, obj2);
console.log('R.eqProps ', result); // false

result = R.eqProps('c', obj1, obj2);
console.log('R.eqProps ', result);

// Type Signature
// Number -> Number
// input number -> return number

/* ifElse
Creates a function that will process either the onTrue or the onFalse function 
depending upon the result of the condition predicate.
*/
const obj = { count: 1 };

const hasCount = R.ifElse(
  R.has('count'),
  R.over(R.lensProp('count'), R.inc),
  R.assoc('count', 1)
);

console.log(hasCount(obj));

// lens - immutable getter, setter

const printEvenOrOdd = R.ifElse(
  (x) => x % 2 === 0,
  () => console.log('Even'),
  () => console.log('Odd')
);
printEvenOrOdd(4);
printEvenOrOdd(5);
