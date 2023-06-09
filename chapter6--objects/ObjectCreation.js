// Object Literal 

let obj = {
    name: "TK"
};
// object.create 

// new 
let date = new Date();
let a = new Array();
let r = new Map();

// new called constructor 
console.log(date);

console.log("Prototype: ", obj.__proto__);
console.log("toString: ", obj.toString());

// property lookup

let obj2 = Object.create({
    x: 100
});

console.log("Obj2: ", obj2);
console.log("Obj2.x: ", obj2.x);