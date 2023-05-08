function sum(a, b) {
  return a + b;
}

let curried = R.curry(sum);
console.log('Curried ', curried(2)(3));

// R.compose
// R.pipe

// All functions in Ramda are already curried.

let students = [
  {
    name: 'Eddy',
    score: 58,
    gender: 'Female',
    city: 'Mandalay',
  },
  {
    name: 'Another',
    score: 58,
    gender: 'Female',
    city: 'Mandalay',
  },
  {
    name: 'Jack',
    score: 58,
    gender: 'Male',
    city: 'Mandalay',
  },
];
const names = R.pluck('name')(students);
console.log(names);

const letters = ['a', 'b', 'A', 'a', 'B', 'c'];
let result = R.countBy(R.toLower)(letters);
console.log(result);
//{a: 3, b: 2, c: 1}

// ap - applicative
result = R.ap([R.multiply(2), R.add(3)], [1, 2, 3]);
console.log(result);

// check Ramda documentation to get exposure of FP
