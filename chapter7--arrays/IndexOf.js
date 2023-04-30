let arr = [1, 2, 3, 4, 5, 2, 3, 3];
console.log(arr);
// let index = arr.indexOf(3);  // 2
let index = arr.indexOf(3, 4); // 6
index = arr.lastIndexOf(3); // 7
console.log(index);

let include = arr.includes(3);
console.log(include); // true
