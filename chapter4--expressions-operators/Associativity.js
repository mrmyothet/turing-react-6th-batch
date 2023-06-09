// precedence - priority 
// Table 4.1 
// highest - Uniary Operators 
// Binary Operators 
// Tenary Operators 
let result = 2 + 3 * 4;
console.log("Result", result); // 14 , 3*4 then + 2 

result = 2 + 3 * 4 + 5;
// when same precedence, which operator comes first -> Associativity
console.log("Result", result); 

result = 2**2**3;
// 2 power 8 or 4 power 3 - problem 
// Associativity of ** operator is Right to Left 
console.log("Result", result); // 2 power 8 -> 256

result = 2 * 3 * 4;
// Associativity of * operator is Left to Right 
// 2*3 first then *4
console.log("Result", result); // 24

// operator 
// Associaity 
// number of input 
// input -> output 

// **
// R 
// 2
// num,num -> num

/*
lval
rval 
any

a = 20;
a = b;
20 = a; -> incorrect 

lval - variable 
rval - literal, constant

*/

result = 1 + 4 / 2 * 5; 
console.log("Result", result);

/* 
sort by precedence 
/ *
+

/ * - check associativity 

1 + 4 / 2 * 5
1 + 2 * 5
1 + 10
11 

*/

result = 1 + 4 / (2 * 5);
console.log("Result", result);

// 1 + 4 / 10
// 1 + 0.4
// 1.4 

// Assignment operator - associativity is R - right to left 
let data = counter++;
console.log("Data ", data);

// Side Effect 
// a + b 
// side effect on operands 
// + -> no side effect 
// ++ -> has side effect 
// delete -> has side effect 

// Order of Evaluation 
// sort by precedence then check associativity 
// if we want to change precedence - use () 