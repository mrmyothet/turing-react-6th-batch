class Range {
  constructor(to) {
    this.to = to;
  }

  [Symbol.iterator]() {
    let i = 0;
    let that = this;

    return {
      next() {
        return {
          value: i++,
          done: i == that.to + 1,
        };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }
}

let iterator = new Range(4)[Symbol.iterator]();
console.log("Iterator ", iterator);
console.log("Next ", iterator.next());
console.log("Next ", iterator.next());
console.log("Next ", iterator.next());
console.log("Next ", iterator.next());

// can use for of loop when it agrees Iterator Protocol

for (let i of new Range(5)) {
  console.log(i);
}
