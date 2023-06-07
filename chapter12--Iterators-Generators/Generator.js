// Delay computation
// Promise - async await

function* getGenerator() {
  console.log("First step");
  console.log("execute parts of the function before first yield ");
  yield 1;
  console.log("Second step");
  console.log("execute parts of the function before second yield ");
  yield 2;
  console.log("Third step");
  console.log("execute parts of the function before third yield ");
  yield 3;
}

let gen = getGenerator();
/*
console.log("Gen ", gen.next());
console.log("Gen ", gen.next());
console.log("Gen ", gen.next());
console.log("Gen ", gen.next());
*/

for (const i of gen) {
  console.log("Gen ", i);
}
