let arr = [2,3,4,[5,6]];
let linearArray = arr.flat();
console.log(linearArray);

arr = [2,3,4,[5,6], [[7,8,9]]];
linearArray = arr.flat(2); // can provide level 
console.log(linearArray);

arr = [1,2,3,4,5];
// linearArray = arr.map(element => [element, element*2]);
linearArray = arr.flatMap(element => [element, element*2]);
