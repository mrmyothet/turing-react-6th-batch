// function payment() {
//   console.log('payment ');
// }

function order() {
  console.log('order');
}

function execute() {
  console.log('execute');
}

// Requirement - want to call once
// payment();
// payment();

// Imperative
// Cross Cutting Concern
let paymentDone = false;
function payment() {
  if (!paymentDone) {
    console.log('payment ');
    paymentDone = true;
  }
}
payment();
payment();

// Functional Approach
// provide function as parameter
// cross cutting concern at one place only
function once(fn) {
  let done = false;
  return function () {
    if (!done) {
      done = true;
      fn();
    }
  };
}
order = once(order);
order();
order();

execute = once(execute);
execute();
execute();

/* 
FP language - F#, Haskell, Scala 
language that support FP - JS, Java, C# - support subset of FP features 

F# - recommend 
Haskell - not recommend 
Scala - FP and OOP
Java - JDK_8 provide Functional Interface - verbose 

*/
