let obj = {
  name: 'Tk',
  age: 38,
  display(msg) {
    console.log('Name ', this.name, ' Age ', this.age, ' Msg ', msg);
  },
};

obj.display();

// function as first class
let fun = obj.display;
fun();
// Problem
// this.name and this.age - undefined
// only get function, cannot get method
fun.call(obj, 'Hello');

// advantage
// Mixin pattern - borrowing when the same structure
//
let obj2 = {
  name: 'someone',
  age: 100,
};
fun.call(obj2, 'Hi from someone');

// Call - provide parameters using comma
// Apply - provide parameters using array
fun.apply(obj, ['Hello']);

// Bind
let fun3 = fun.bind(obj2);
fun3('Hello from binding obj2 into fun');

// Function as constructor and eval
// should not use - because of RCE - remote code execution
