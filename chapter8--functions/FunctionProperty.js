// custom property in function
// usage
// count how many times this function is called
// as static property
// as cache - factorial problem

function getUnique() {
  return getUnique.id++;
}
getUnique.id = 1;

console.log(getUnique());
console.log(getUnique());
console.log(getUnique());

// 3! = 3 * 2 * 1
// function fact(n) {
//   console.log('Fact compute ', n);
//   let result = 1;
//   for (let i = 3; i >= 1; i--) {
//     result *= i;
//   }
//   return result;
// }

// console.log(fact(3));

function fact(n) {
  if (fact[n]) {
    return fact[n];
  }
  console.log('Fact compute ', n);
  let result = 1;
  for (let i = 3; i >= 1; i--) {
    result *= i;
  }
  fact[n] = result;
  return result;
}
console.log(fact(3));
console.log(fact(3)); // not compute again
