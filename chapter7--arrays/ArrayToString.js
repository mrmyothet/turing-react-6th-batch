let arr = [1, 2, 100, 11, 3];
let str = '' + arr;
console.log(str);

str = arr.join(':');
console.log(str);

// Static Method - Array.
let isArray = Array.isArray(arr);
console.log(isArray);

// Array Like Object
function display() {
  console.log(arguments);
}
display(1, 2, 3);

// String as Array
display('hello', 2);
