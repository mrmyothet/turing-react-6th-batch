/* 
Bitwise Operators 

Bit 1,0
    8 bit = 1 byte

    AND 
    0 0 = 0
    0 1 = 0
    1 0 = 0
    1 1 = 1

    OR
    0 0 = 0
    0 1 = 1
    1 0 = 1
    1 1 = 1

    XOR - not same then 1
    0 0 = 0
    0 1 = 1
    1 0 = 1
    1 1 = 0

*/

let a = 3; // 0b11
let b = 1; // 0b1

// to output in binary -> toString(2)
console.log('A in binary ', a.toString(2));
console.log('B in binary ', b.toString(2));
console.log('A & B in binary ', (a&b).toString(2));
console.log('A | B in binary ', (a|b).toString(2));
console.log('A ^ B in binary ', (a^b).toString(2));
console.log('~A in binary ', (~a).toString(2)); // -100 - incorrect in toString method

console.log('A<<1 in binary ', (a<<1).toString(2));
console.log('A>>1 in binary ', (a>>1).toString(2));