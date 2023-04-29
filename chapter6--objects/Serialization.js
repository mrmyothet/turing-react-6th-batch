
let a = { 
    x: 10, 
    items: [10, 20], 
    method: function()
    {
        console.log('My items are ', this.items);
    }, 

    propertyInfinity: Infinity,
};

let b = {
    z: 30, 
    y: 100
}

// Object serialization 
// Use TCP to send data over http - TCP use string 

let jsonStr = JSON.stringify(a);
console.log('JSON Str ', jsonStr);
let clone = JSON.parse(jsonStr);

console.log('a===clone ', a===clone); // false  

clone = Object.assign({...a}, clone);
console.log('Clone ', clone); // include method 

// NaN, Infinity and - Infinity are serialized to null


// JSON.stringify() serializes only the enumerable to own properties 
let c = Object.create(a); 
c.y = 200; 
console.log('C serialization ', JSON.stringify(c));