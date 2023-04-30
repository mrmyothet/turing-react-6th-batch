let arr = [1, 2, 100, 11, 3];
arr.sort();
// (5) [1, 100, 11, 2, 3]

// lexigraphical order
// array can accept any types
// that's why it use string sort order
console.log(arr);

/* 
    == 0
    > 1
    < -1
*/

function comparator(a, b) {
  //   return a - b;    // (5) [1, 2, 3, 11, 100]
  return b - a; // (5) [100, 11, 3, 2, 1]
}

arr.sort(comparator);
console.log(arr);

let objArr = [
  {
    name: 'Tk',
    age: 38,
  },
  {
    name: 'Aung Aung',
    age: 20,
  },
  {
    name: 'Mya Mya ',
    age: 45,
  },
  {
    name: 'Win Naing',
    age: 20,
  },
];

objArr.sort((a, b) => a.age - b.age);
console.log(objArr);

// sort by 2 cirteria
// when the same age, sort by name
objArr.sort((a, b) => {
  if (a.age == b.age) {
    return a.name.localeCompare(b.name);
  } else {
    return a.age - b.age;
  }
});
console.log(objArr);

objArr.reverse();
console.log(objArr);
