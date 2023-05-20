let arr = [1, 2, 3];

let func = (x) => [x, x * 2];

let result = arr.flatMap(func);
console.log(result);
