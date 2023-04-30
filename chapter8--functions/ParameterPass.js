// funcion can accept object as arguments
function display(obj) {
  console.log('Name ' + obj.name + ' Age ' + obj.age);
}

const obj2 = {
  name: 'Tk',
  age: 38,
};
display(obj2);

// pass function as parameter
function inc(x) {
  x++;
  console.log('X ' + x); // 11
}
let k = 10;
inc(k); // x = k - primitive assignment - copy
console.log('K ' + k); // 10
// why k is not changed
// JavaScript - only have Pass by Value

function change(obj) {
  obj.x++;
}
let obj3 = {
  x: 10,
};
change(obj3);
console.log(obj3); // obj.x becomes 11

function change2(obj) {
  obj = {
    x: 300,
  };
}
change2(obj3); // x:11 - change2 function update to new object
console.log(obj3);
