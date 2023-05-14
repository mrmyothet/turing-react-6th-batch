/* Monoid 

S x S -> S
two input -> one output 

1 + 1 = 2
input type = output 
string, string -> string 
number, number -> number 

Monoid 
- plus operation 
- string concat 

1. Associativity 

1+2+3 = (1+2)+3 = 1+(2+3)

sum of array with about 1 million 
problem -> not efficient 

1 million
10 group
sum on thread 
sum the results 

run on multi-core processor - make sense 

parallel programming environment 
threading environment 
distributed, cluster etc. 

2. Identity 
[1,2,3]
[1,2][3]
[1,2][3,0]

identity element of addition - 0
identity element of multiplication - 1
identity element of string concatenation - '' - empty string 

MapReduce programming model - use in Big Data 

*/

var Sum = { empty: () => 0, concat: (x, y) => x + y };
var Mult = { empty: () => 1, concat: (x, y) => x * y };

var arraySum = [1, 2, 3, 4, 5, 6].reduce(Sum.concat, Sum.empty());
console.log('arraySum ', arraySum);

// Is division monoid ?
// No - problem with Identity

// reduce is called fold
// we can do filter, map from reduce

// we are using reduce - method of array
// method - cannot compose
// let's write a function

var fold = function (array, monoid) {
  var accumulation = monoid.empty();

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    accumulation = monoid.concat(accumulation, element);
  }
  return accumulation;
};

let total = fold([10, 20, 30], Sum);
console.log('Fold Sum ', total);

total = fold([10, 20, 30], Mult);
console.log('Fold Mult', total);
