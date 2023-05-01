// function inside function
function outer() {
  let x = 10;
  function inner() {
    console.log('Inner ', x);
  }
  console.log('outer ');
  inner();
}
outer();

// you cannot call inner()
// inner(); // caught ReferenceError: inner is not defined

/* 
closure can save state - context 
usefule in OOP 
*/
function getUnique() {
  let x = 1;
  return function () {
    return x++;
  };
}

// Closure Power over property
let unique = getUnique();
console.log(unique());
console.log(unique());
console.log(unique());

let unique2 = getUnique();
console.log(unique2());
console.log(unique2());
console.log(unique2());
