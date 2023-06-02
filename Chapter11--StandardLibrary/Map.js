// key value

let map = new Map([
  ['1', 'Aung Aung'],
  ['2', 'Maung Maung'],
]);

// Create Map from object
let obj = {
  name: 'Something',
  age: 28,
};
console.log('obj', obj);
let map2 = new Map(Object.entries(obj));
console.log('map2 ', map2);
console.log('Size', map2.size);

// key is unique
map2.set('name', 'Tk');
console.log('map2', map2);

console.log('Get', map2.get('name'));
console.log('Has name', map2.has('name'));

// map2.delete('age');
// console.log('map2', map2);
// map2.clear();
// console.log('map2', map2);

map.forEach((value, key) => console.log('value', value, 'key', key));
map2.forEach((value, key) => console.log('value', value, 'key', key));
