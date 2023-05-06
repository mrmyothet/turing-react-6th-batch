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
