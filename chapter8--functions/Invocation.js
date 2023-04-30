// 1. Invoke as function
function outer() {
  console.log('Outer called');
}
outer();

// 2. Invoke as method
// method can access properties inside the object
let obj = {
  x: 10,
  y: 20,
  display() {
    console.log('X ', this.x, ' Y ', this.y);
  },
  toString() {
    return 10;
  },
  get something() {
    console.log('get something called');
    return 10;
  },
};
obj.display();

// 3. Constructor Invocation
// use before having Class functionality in JS
function Human(name, age) {
  this.name = name;
  this.age = age;
  console.log('Constructor run ');
}
let obj2 = new Human('Tk', 38);
console.log(obj2);

// 4. Indirect Invocation
// toString, valueOf
console.log(3 + obj);

// getter, setter
obj.something;
