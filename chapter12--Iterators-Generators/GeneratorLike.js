function getGenerator() {
  let data = [];
  function cYield(item) {
    data.push(item);
  }
  cYield(1);
  cYield(2);
  cYield(3);
  return {
    next() {
      return {
        value: data.shift(),
        done: data.length == 0,
      };
    },
  };
}

let gen = getGenerator();
console.log("Gen ", gen.next());
console.log("Gen ", gen.next());
console.log("Gen ", gen.next());
