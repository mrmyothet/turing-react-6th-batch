let arr = [10, 20, 30];

// add to last 
arr.push(40);
arr.push(50, 60); // can add more than one values using comma 
console.log('Arr ', arr);

// add at front
arr.unshift(-100); 
console.log('Arr ', arr);

// pop - get last of the array 
let last = arr.pop(); 
console.log('Arr ', arr);
console.log('Last ', last);

// shift - get front of the array 
let first = arr.shift();
console.log('Arr ', arr);
console.log('First ', first);

// delete - generally should not use 
delete arr[0];
console.log('Arr ', arr);
console.log('arr[0] in arr', [0] in arr); // false 
console.log('arr[0]', arr[0]); // undefined 

// read array - iterating array - can use - for of
// write array - use traditional for loop 