let arr = [1, 2, 3, 1, 1, 1, 2, 3, 3, 5, 5, 5];
let k = 2;

/*
let frequencyCount = R.countBy(R.identity)(arr);
console.log(frequencyCount);
// {1: 4, 2: 2, 3: 3, 5: 3}

let countArr = Object.entries(frequencyCount);
console.log(countArr);

const sortByFrequency = (a, b) => b[1] - a[1];
const sortedCount = R.sort(sortByFrequency)(countArr);
console.log(sortedCount);

const sortedElement = R.map((arr) => arr[0])(sortedCount);
console.log(sortedElement);

const answer = R.take(k)(sortedElement);
console.log('Answer ', answer);

*/

// still not functional style
// let's do in functonal style

const log = R.tap(console.log);

const sortByFrequency = (a, b) => b[1] - a[1];

let topKElement = R.pipe(
  R.countBy(R.identity),
  log,
  Object.entries,
  log,
  R.sort(sortByFrequency),
  log,
  R.map((arr) => arr[0]),
  log,
  R.take(k),
  log
);
console.log('TopK ', topKElement(arr));
