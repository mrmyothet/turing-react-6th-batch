// ?: tenary operator - accept 3 operands
// can use shortcut for if then else 
let num = 3;
let evenOrOdd = num % 2 == 0 ? 'Even': 'Odd';
console.log('Even or Odd ', evenOrOdd);

let maxWidth = 0;
let preferences = {
    maxWidth : 1234
};
let max = maxWidth || preferences.maxWidth || 500;
console.log('Max ', max); // 1234


// ?? - check null or undefined 
max = maxWidth ?? preferences.maxWidth ?? 500;
console.log('Max ', max); // 0

// ES2020
let options = {
    titles: 'Title'
};
let data = options.data?? 'Data';
console.log('Result ', data);