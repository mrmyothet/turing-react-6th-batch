/*

// Imperative 
obj = {
    data: 'something'
}
getter
setter - update data - Mutable

Mutable is not ok in Functional Programming 
FP need immutable 
getter and setter - cannot compose 

*/

let obj = {
  name: 'Tk',
  age: 23,
  score: -30,
};

let another = {
  ...obj,
  age: obj.age + 1,
  address: {
    city: 'Kalaw',
    state: 'Shan',
  },
};

console.log('another', another);
console.log('R.prop', R.prop('age')(obj));

let anotherClone = R.assoc('age', 20, obj);
console.log('anotherClone', anotherClone);

anotherClone = R.assocPath(['address', 'city'], 'Somewhere', obj);
console.log('anotherClone', anotherClone);

console.log('Object', R.path('address', 'city'), obj);

/*
path - getter
assoc - setter 

Lens - collection of getter and setter 
Lens can compose 
*/
