// Alternative

const isEven = (x) => x % 2 === 0;
const notEven = (x) => `It is not even`;

const alt = (fn, orFn) => (value) => fn(value) || orFn(value);
const func = alt(isEven, notEven);

console.log(func(4)); // true
console.log(func(5)); // It is not even

const newFunc = R.or(isEven, notEven);
console.log(newFunc(4)); // true
console.log(newFunc(5)); // false
