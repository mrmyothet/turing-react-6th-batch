/*
as the same as Boolean Algebra AND 

0 0 = 0
0 1 = 0
1 0 = 0
1 1 = 1

both operand is 1 then result 1 

// Algorithmic Nature         
if first operand is falsy 
    return first operand 
else if first operand is truthy
    return second operand 

*/

// use case 

console.log("false && false", false && false);
console.log("false && true", false && true);
console.log("true && false", true && false);
console.log("true && true", true && true);

// operands of boolean operators may be any types 
// truthy and falsy
// can return any type 

console.log("true && 'true' ", true && 'true'); // string true - return second operand 
let result = 'true' && true;
console.log(typeof result); 

console.log("'true' && true" , 'true' && true);
result = 'true' && true;
console.log(typeof result); 

let raining = true;
if(raining)
{
    console.log('Take umbrella');
}

// Problem 
// JSX in React.js cannot write if statement

// write expression without if statement 
raining && console.log('Take umbrealla');