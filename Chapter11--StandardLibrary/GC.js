/*
map.set(obj, AnotherObj)

method => stack memory
stack frame

objec => heap memory 

[100bytes, ---, 100bytes]

*/

/*
function process() {
  let data = {
    name: 'Tk',
    age: 38,
  };

  let arr = new Array(3000);
}
*/

// stack[data, arr]
// heap -> data object, arrary contents

// garbage
// objects from heap that cannot reach from varialbes from stack

// Garbage Collection

let arr = [];
let another;

// let map = new Map();
// map.set(arr, 'something');

let weakmap = new WeakMap();
weakmap.set(arr, 'something');

/*
WeakMap class is a variant of the Map class
that does not prevent its key values from being garbage collected

Map holds 'strong' references to its key values
WeakMap keep 'weak' references to its key values 

WeakMap keys must be objects or arrays
*/

document.getElementById('btnAllocate').addEventListener('click', () => {
  console.log('Allocate');
  for (let i = 0; i < 10; i++) {
    arr.push(new Array(100_000));
  }
  another = arr;
  // another also point to contents of arr
});

document.getElementById('btnAssignNull').addEventListener('click', () => {
  console.log('Assign Null');

  arr = null;
  // Object become garbage when no one can reference it
  // if another is reference, arr contents does not become garbage

  // console.log(arr);
  // null

  // console.log(another);
  // (10) [Array(100000), Array(100000), Array(100000), Array(100000), Array(100000), Array(100000), Array(100000), Array(100000), Array(100000), Array(100000)]

  another = null;
});
