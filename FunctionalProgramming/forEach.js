let arr = [1, 2, 3, 4];
// forEach is method in array

function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

forEach(arr, console.log);
