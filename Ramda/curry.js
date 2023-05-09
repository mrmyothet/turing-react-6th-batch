function sum(a, b) {
  return a + b;
}

let curried = R.curry(sum);
console.log('Curried ', curried(2)(3));

// R.compose
// R.pipe

// All functions in Ramda are already curried.
