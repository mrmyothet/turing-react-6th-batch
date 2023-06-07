let arr = [1, 2, 3, 4];

for (const i in arr) {
  console.log("I ", i);
}

let chars = [..."abcd"];
console.log(chars); // ['a', 'b', 'c', 'd']

let data = [1, 2, 3, 4, 5];
console.log(Math.max(...data)); // 5

let purpleHaze = Uint8Array.of(255, 0, 255, 128);
let [r, g, b, a] = purpleHaze;
console.log(a); // 128

// [Symbol.iterator]()
// .next()
// .done
// .value

let iterable = [99, 20];
let iterator = iterable[Symbol.iterator]();
/*
for (let result = iterator.next(); !result.done; result = iterator.next()) {
  console.log("Result ", result.value);
}
*/

console.log(iterator.next()); // {value: 99, done: false}
console.log(iterator.next()); //{value: 20, done: false}
console.log(iterator.next()); //{value: undefined, done: true}
