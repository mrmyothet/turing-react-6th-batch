let arr = [1, 2, 3, 4, 5];
/*
sum/length 
*/
let result = R.sum(arr);
console.log('Sum, ', result);
console.log('Average ', R.divide(R.sum, R.length)(arr));

// 5/2 , divide(5,2), divide(5)(2)
// want to provide 2 first
// divide(2)(5)
