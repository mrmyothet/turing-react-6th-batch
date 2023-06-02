// collection without duplicates

let arr = [10, 20, 10, 30, 20];

let set = new Set(arr);

console.log('Arr ', arr);
console.log('Set ', set);
console.log('Set.size ', set.size);

// let unique = new Set('Mississippi');
// console.log('unique of Mississippi ', unique); // Set(4) {'M', 'i', 's', 'p'}

set.add('one');
set.add(3);
set.add(10); //duplicate - will not add into set
console.log('Set ', set);
console.log('Set.size ', set.size);

set.add([10, 20]);
console.log('Set ', set);

set.delete(10);
console.log('Set ', set);

// set.clear();
// console.log('Set ', set);

set.delete('20'); // will not delete - test with ===
console.log('Set ', set);

console.log('Iterating Set');
for (const item of set) {
  console.log('Item ', item);
}
