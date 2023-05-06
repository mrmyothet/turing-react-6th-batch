let arr = ['1', '2', '3', '4'];

let numbers = arr.map(parseInt);
console.log('Number ', numbers);
// (4) [1, NaN, NaN, NaN]

// arr.map(function (a, b, c) {
//   console.log('A ', a, 'B ', b, 'C ', c);
// });

// console.log('parseInt ', parseInt('11', 2)); // 3
// parseInt(value, base)
// parseInt(1, 0); // 1
// parseInt(2, 1); // NaN

let numbers2 = arr.map((x) => parseInt(x));
console.log(numbers2);

const unary = (fn) => (fn.length === 1 ? fn : (arg) => fn(arg));

const numbers3 = arr.map(unary(parseInt));
console.log(numbers3);
