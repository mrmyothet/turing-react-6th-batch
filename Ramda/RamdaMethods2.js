const even = (x) => x % 2 === 0;
let result = R.count(even, [1, 2, 3, 4, 5]);
console.log(result);

// comparator and sort
const byAge = R.comparator((a, b) => a.age < b.age);
const people = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByIncreasingAge = R.sort(byAge, people);
console.log(peopleByIncreasingAge);

result = R.always('Hello')('Something');
console.log(result);

result = R.equals(10)(11);
console.log(result);

// R.cond takes a list of [predicate, transformer] pairs
// predicate - expression return boolean value
// R.T - A function that always returns true
const fn = R.cond([
  [R.equals(0), R.always('water freezes at 0°C')],
  [R.equals(100), R.always('water boils at 100°C')],
  [R.T, (temp) => 'nothing special happens at ' + temp + '°C'],
]);
fn(0); //=> 'water freezes at 0°C'
fn(50); //=> 'nothing special happens at 50°C'
fn(100); //=> 'water boils at 100°C'
