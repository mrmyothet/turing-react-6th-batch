// Comparison Operators 

console.log("3>2 ", 3 > 2);
console.log("2>=2 ", 2 >= 2);

let obj2 = {
    valueOf: function(){
        return 4;
    }
}

console.log("obj2 > 3 ", obj2 > 3);

console.log("apple > orange ", "apple" < "orange"); // true
// if both operands are string 
// compare with lexiographic order - a,b,c,d etc. 
console.log("apple > orange ", "apple" > "orange"); // false 

console.log("true > false ", "true" > false);
// "true" > false
// toNumber("true") > toNumber(false) 
// NaN > false 
// compare NaN with anything -> false 

console.log("'' >= false ", '' >= false);
// toNumber('') >= toNumber(false)
// 0 >= 0
// true