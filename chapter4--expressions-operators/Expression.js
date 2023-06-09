// Expression - evaluates to a value
let c = 2 + 3;

// Simple Expression - Primary Expression - without operators
// Complex Expression 

// Statemet 
let data = 'Something'; // assignment statement 

// Analogy 
// phrase and sentence in English 

// Object Initializer 
let obj = {
    name: "TK", 
    age: 38, 
    address:{
        city: "Yangon"
    },
};

// Array Initializer 
let arr = [10, 20, 30];


// Function definition Expression 
function hello(){
    console.log('Hello');
}
let fun = hello;

let something = function()
{
    console.log('Something');
};
something();


// Property Access Expression 
// object have properties and their values

console.log('Name ', obj.name)

let propertyName = 'age';
console.log('Age ', obj[propertyName]);


// Conditional Property Access
// ES2020
console.log('Address' ,obj.address.city);

// No need to check existence of the property 
console.log('City', obj.address?.city);


// Function Invocation Expression 
let func = function()
{
    console.log('Hello');
};
func();

let k;
// k();  // Uncaught TypeError: k is not a function

k?.();