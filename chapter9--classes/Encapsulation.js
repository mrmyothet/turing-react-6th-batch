function push(stack, element) {
  stack.push(element);
}

function pop(stack) {
  return stack.pop();
}

let stack1 = [];
let stack2 = [];

push(stack1, 'one');
console.log('stack1: ', stack1);

// let obj;
// push(obj, 'two');

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
}

let s1 = new Stack();
s1.push('One');
s1.push('Two');
console.log('S1:', s1.pop());

/* Encapsulation
    works with its method with its properties
    keep its internal state
*/
