"use strict";

function hello() {

    // console.log('Callee', arguments.callee);
    // caught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them

    console.log('Args ', arguments);
    console.log('this ', this);
}

hello();

// all variables must be declared 
// functions invoked as functions (rather than as methods) 
// have a this value of undefined 
// cannot assign to readonly properties - e.g top 

// console.log('Arg ', arguments);

// eval ("var k=10;")
// delete something;

let obj = {
    age: 'Name', 
    age: 'Antoher name '
}

// let eval = "something";

// should we always use strict --> Yes 
// Is there and difference strict mode and unstrict mode in compile time -> No difference 

// can override obj.age = "abc" in strict mode --> yes 