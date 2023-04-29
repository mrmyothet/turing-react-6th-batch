let a = { 
    x: 10, 
    items: [10, 20]
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


let c = Object.assign({...a}, b, {str: 'Hello'});
c.items.push(30);

console.log('A ', a);
console.log('B ', b);
console.log('C ', c);