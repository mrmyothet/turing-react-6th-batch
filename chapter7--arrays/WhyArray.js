let age0 = 20;
let age1 = 30;
let age2 = 25;

// collection of variables 
let ages = [20, 30, 25];

// index - starting from zero - why -- will explain later 
console.log('Ages 0 ', ages[0]);
console.log('Ages 1 ', ages[1]);
console.log('Ages 2 ', ages[2]);

console.log('Ages length ', ages.length);

// differences between js arrays and other static typed languages 
// js can have mixed types in an array 
ages = [20, 30, 25, true, false, "Hello"];
console.log('Ages ', ages);

// length is dynamic in size 
ages[10] = 22;
console.log('Ages ', ages);

// compress the array 
ages.length = 4; 
console.log('Ages ', ages);