const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals);
console.log('slice 2 ' + animals.slice(2));
console.log('slice 2,4 ' + animals.slice(2,4));
console.log('slice -2 '+ animals.slice(-2));
console.log('slice -2, -1 ' + animals.slice(-2, -1));

// return new array - 
let clone = animals.slice();
console.log(clone);
console.log(clone==animals);    // false

let newarr = animals.slice(1, animals.length);
console.log(newarr);