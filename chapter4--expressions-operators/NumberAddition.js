// Additional Operator 

let a = 10;
let b = 20;
let c = a + b;

// lref 
// lval be GetValue(lref)
// rval be GetValue(rfef)
// lprim - toPrimitive(lval)
// rprim - toPrimitive(rval)
// 

let result = false + 3;
console.log('Result ', result); // 3

// toNumber(false) + 3
// 0 + 3
// 3

result = false + null;
console.log('Result ', result); // 0

result = false + undefined;
console.log('Result ', result); // NaN

let posZero = 0;
let negZero = -0;
result = negZero + negZero;
console.log('Result ', result); // -0

result = posZero + posZero;
console.log('Result ', result); // 0

result = posZero + negZero;
console.log('Result ', result); // 0