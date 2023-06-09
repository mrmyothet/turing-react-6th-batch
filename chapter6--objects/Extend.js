
let source = {
    x: 100, 
    z: 20
};

let target = {
    y: 200, 
    x: 40
}; 

for (let key of Object.keys(source))
{
    target[key] = source[key];
}

console.log('Target ', target);

let a = {
    x: 10, 
    y: 20
};
console.log('A ', a);

let b = {
    z: 30,
    y: 100
};
console.log('B ', b);

let c = Object.assign(a, b);
console.log('C ', c);
console.log('A after assign', a);
console.log('B after assign', b);

let config = {
    color: 'blue', 
};

let defaultConfig = {
    color: 'gray', 
    background: 'white',
};
