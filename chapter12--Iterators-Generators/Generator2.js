function* oneAndDone() {
  yield 1;
  return "done";
}

for (let i of oneAndDone()) {
  console.log("I ", i);
}

let gen = oneAndDone();
console.log("Gen ", gen.next()); // {value: 1, done: false}
console.log("Gen ", gen.next()); // {value: 'done', done: true}
console.log("Gen ", gen.next()); // {value: undefined, done: true}

// Pass parameters back-and-forth
function* smallNumbers() {
  console.log("First");
  let y1 = yield 1;
  console.log("Second");
  console.log("y1", y1);
  let y2 = yield 2;
  console.log("y2", y2);
}

gen = smallNumbers();
console.log("Next ", gen.next("Hello"));
console.log("Next ", gen.next("World"));
