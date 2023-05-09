/*
Memoization is an optimization technique 
that makes applications more efficient and hence faster. 
It does this by storing computation results in cache, 
and retrieving that same information from the cache the next time it's needed 
instead of computing it again.

*/

function factorial(n) {
  let result = 1;
  console.log('Compute factorial ', n);
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log('Factorial of 4 ', factorial(4));

const memonize = (fn) => {
  const lookupTable = {};

  return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg));
};

const newFact = memonize(factorial);
console.log('NewFact ', newFact(4));
console.log('NewFact ', newFact(4));
console.log('NewFact ', newFact(4));
