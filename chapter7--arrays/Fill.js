// fill is also mutable method 

let arr = new Array(5);
console.log(arr);
console.log(arr[0]);    // undefined 

arr.fill(1, 2, 5);
console.log(arr);

arr.fill(0, 0, arr.length);
console.log(arr);

const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1);
const array2 = array1.copyWithin(0, 3, 4);
console.log(array2);
// copy to index 1 all elements from index 3 to the end 

