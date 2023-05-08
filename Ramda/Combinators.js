// Fork

const fork = (join, fn1, fn2) => (value) => join(fn1(value), fn2(value));
/*
div(sum/length)(arr)
*/
const length = (array) => array.length;
const sum = (array) => array.reduce((a, b) => a + b, 0);
const divide = (a, b) => a / b;

const arithmeticAverage = fork(divide, sum, length);
console.log('Average ', arithmeticAverage([2, 3, 4]));

// Alternative
const alt = (fn, orFn) => (value) => fn(value) || orFn(value);

/*
const users = [
  {
    uuid: '1',
    name: 'William',
  },
];

const findUser = ({ uuid: searchesUuid }) =>
  users.find(({ uuid }) => uuid === searchesUuid);
const newUser = (data) => ({ ...data, uuid: uuid() });

const findOrCreate = alt(findUser, newUser);
console.log(findOrCreate({ uuid: 1 }));
*/

const isEven = (x) => {
  x % 2 === 0;
  console.log('It is even');
};
const notEven = (x) => console.log('It is not even');
const func = alt(isEven, notEven);
// console.log(func(4));
// console.log('------');
// console.log(func(5));

// R.converge - fork combinator
const average = R.converge(R.divide, [R.sum, R.length]);
console.log(average([(1, 2, 3, 4, 5, 6, 7)]));
