let str = 'Hello';
let arr = [...str]; // suppress symbol 
console.log('Arr ', arr);

// Array constructor 
let arr2 = new Array(1, 2, 3); 
console.log('Arr2 ', arr2);

// problem of array constructor 
// more than one parameter ->  array 
// one parameter -> size of the array 
arr2 = new Array(10); 
console.log('Arr2 ', arr2);

// there is no difference between array literal and result of suppress symbol 

// Array.of 
// Array.from 
// will explain details in function programming 

let arr3 = Array.from(arr2);
console.log('Arr3 ', arr3);