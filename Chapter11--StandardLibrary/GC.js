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
  // console.log(another);
  // (10) [Array(100000), Array(100000), Array(100000), Array(100000), Array(100000), Array(100000), Array(100000), Array(100000), Array(100000), Array(100000)]

  another = null;
});
