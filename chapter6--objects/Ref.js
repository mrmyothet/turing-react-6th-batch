// shallow clone vs deep clone 

let a = { 
    x: 10, 
    items: [10, 20]
};

let b = {
    z: 30, 
    y: 100
}

let c = Object.assign({...a}, b, {str: 'Hello'});
c.items.push(30);

console.log('A ', a);
console.log('B ', b);
console.log('C ', c);