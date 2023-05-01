function add(x, y) {
  return x + y;
}

// Arrow Functions

// single statement
const add2 = (x, y) => x + y;

console.log(add2(10, 2));

// multiple statement
// need { } and return
const double = (x) => {
  console.log(x);
  return x * 2;
};

let result = double(10);
console.log(result);

// Cannot be used as Methods
// No binding of arguments
// Cannot be used as constructors
let obj = {
  name: 'Tk',
  age: 38,
  display: () => {
    console.log(this.name, this.age); // undefined
  },
};
obj.display();
