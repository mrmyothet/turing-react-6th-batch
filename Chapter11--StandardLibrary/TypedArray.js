// JS has no type
// why Typed Array is needed in JS

// the size of the variable is around 16 bytes

// In Java, Int type - 4 bytes
// int arr[] = new int[10];    // 40 bytes

// In JS,
// let arr = Array(10); // 160 bytes

// numPy in Python
// TypedArray in JS
// to compact in size

// Typed Arrays are not technically arrays
// Array.isArray() returns false
// but they implement all of the array methods
// plus a few more of their own

// there is not much usecases in JS
// NodeJS environment - low level - networking - File Read/Write

// let bytes = new Uint8Array(1024);
let arr = [];

document.getElementById('btnAllocate').addEventListener('click', () => {
  console.log('Allocate');
  for (let i = 0; i < 10; i++) {
    arr.push(new Uint8Array(100_000)); // 1.9 MB in heap
    // arr.push(new Array(100_000));   // 4.9 MB in heap

    // size difference
  }
  another = arr;
  // another also point to contents of arr
});

let buffer = new ArrayBuffer(1024 * 1024);
let asBytes = new Uint8Array(buffer);
let asInts = new Int32Array(buffer);
asInts[0] = 200;
console.log('asInts', asInts[0]);
console.log('asBytes', asBytes[0]);
