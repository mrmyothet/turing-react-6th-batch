// Read and write - use bracket notation 
// if there is no value in the index - undefined 

let arr = [10, 20, 30];
arr[0] = 2;

console.log('Arr ', arr);
console.log('Arr[4]', arr[4]); // undefined 

// -10 become property - not index - because Array is also a object 
arr[-10] = 'Hello'; 
console.log('Arr ', arr);
console.log('Arr.lenght ', arr.length); // 3

arr['5'] = 20; // can convert to number 
console.log('Arr ', arr);
console.log('Arr.lenght ', arr.length); // becomes 6 with 2 undefined values 

// Sparse array
// large in size, but can have empty rooms 
// javascript can have sparse array 