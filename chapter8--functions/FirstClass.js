/*
Function as First Class - As Value

Rule 1. can assign to variable
Rule 2. can pass as parameter
Rule 3. can return function

FP -> composition, pipeline 
can implement higher order function 
Array Methods - map, reduce 

*/

// Rule 1. can assign to variable
// const fun = function(){
//     console.log('Fun executed');
// }

function hello() {
  console.log('hello executed ');
}
const fun = hello;
fun();

// Rule 2. can pass as parameter
function HigherOrder(fun) {
  fun();
}
HigherOrder(hello);

// Rule 3. can return function
function getFun() {
  return function () {
    console.log('return funtion executed');
  };
}
getFun()();
