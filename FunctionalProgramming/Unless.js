// unless - do when condition is false
// !condition
const unless = (cond, fn) => {
  if (!cond) fn();
};

let x = 10;
unless(x > 10, () => console.log('X is less or equal than 10'));
unless(x == 10, () => console.log('X is not equal to 10'));

// if you learn lambda calculus, you will know more

function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

forEach([1, 2, 3, 4, 5, 6, 7], (number) => {
  unless(number % 2, () => {
    console.log(number, ' is even');
  });
});
