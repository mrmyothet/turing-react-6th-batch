
let parent = {
    data: 200, 
    method: function()
    {
        console.log('Method in parent');
    }
}

delete parent.data;
console.log('Parent ', parent);
console.log('method in parent ', 'method' in parent); // true

let obj = Object.create(parent);
obj.x = 10;
obj.ownProperty = 'ownPropertyValue';

console.log('method in obj ', 'method' in obj);
console.log('hasOwnProperty ', obj.hasOwnProperty('method'));
console.log('hasOwnProperty ', obj.hasOwnProperty('x'));

console.log('obj.propertyIsEnumerable("toString") ', obj.propertyIsEnumerable("toString"));

// Enumeration 
for(let p in obj)
{
    console.log('Property ', p);
}

console.log('Keys ', Object.keys(obj));
console.log('Object.getOwnPropertyNames(obj) ', Object.getOwnPropertyNames(obj));
console.log('Reflect.ownKeys(obj) ', Reflect.ownKeys(obj));