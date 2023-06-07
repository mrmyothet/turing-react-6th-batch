function* filter(collection, predicate) {
  for (const value of collection) {
    if (predicate(value)) {
      console.log("Predicate Ok");
      yield value;
    }
  }
}

let called = 0;
const odds = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], (value) => {
  called++;
  return value % 2;
});

console.log(odds); // Generator
console.log("odds.next ", odds.next());
console.log(called);
console.log("odds.next ", odds.next());
console.log(called);
console.log("odds.next ", odds.next());
console.log(called);

function take(n, lazyCollection) {
  let items = [];
  for (let i = 0; i < n; i++) {
    items.push(lazyCollection.next().value);
  }
  return items;
}

let data = take(2, odds);
console.log("take(2, odds)", data);
console.log(called);
