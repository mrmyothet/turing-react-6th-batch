const add = (x, y) => x + y;

let result = add(1, 3);

let k = 10;
function getSome() {
  return k++;
}
// getSome() function is impure
// need to find who update k
// difficult to trace
// impure -> difficult to test
// difficult to reason

let data = add(1, 3);
// Referential Transparency
// no need to execute again
// Cache able
// testable
// Reasonable code
// Parallel Code - more computational - efficient
// Pipelines and Composable
