let arr = [
  {
    name: "One",
    value: 1,
  },
  {
    name: "Two",
    value: 2,
  },
];

console.time("TimeLog");

console.log("ObjArr ", arr); // value 4

arr[0].value = 4;
console.log("ObjArr ", arr); // value 4

// because of Lazy Loading - by reference

console.log("Log");
console.debug("Debug");
console.info("Info");
console.warn("Warn");
console.error("Error");

// remove console.log in production
// it is IO, concern in performance
// can use third party to delete console.log statements

function div(a, b) {
  console.assert(!(isNaN(a) || isNaN(b)), "A or B is NaN");
  return a / b;
}

// div(NaN, 10); // Assertion failed: A or B is NaN
div(10, 20);

// console.clear();

console.table(["apples", "oranges", "bananas"]);

// console.time("TimeLog");
console.timeLog("TimeLog"); // TimeLog: 6.790283203125 ms

console.timeEnd("TimeLog");

console.group();
console.log("Level 1");

console.group();
console.log("Level 2");
console.groupEnd();

console.groupEnd();

function one() {
  function two() {
    console.log("Two");
    console.trace();
  }
  two();
}

one();

console.dir(arr);
