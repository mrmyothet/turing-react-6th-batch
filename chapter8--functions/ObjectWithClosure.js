let obj = {
  name: 'Tk',
  age: 38,
};

// object properties does not have encapsulation
obj.name = 100;
// accidental changes when working with other developers
console.log(obj.name);

// solve with closure
function stack() {
  let items = [];
  function push(element) {
    items.push(element);
  }
  function pop() {
    return items.pop();
  }
  // only provide interface to implement in client
  return {
    push,
    pop,
  };
}

let s1 = stack();
s1.push(100);
s1.push(200);
console.log('S1', s1);

console.log(s1.items); // undefined - means cannot access
// s1.items = []; // cannot change items

console.log(s1.pop()); // but can pop from items using interface
console.log(s1.pop());
