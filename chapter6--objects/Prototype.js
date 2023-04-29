let parent = {
    x: 100,
    items: []
};

let obj2 = Object.create(parent, {
    y: {
        value: 300, 
        configurable: false
    }
});

console.log("Obj: ", obj2);
console.log(obj2.y);
console.log(obj2.x);

// property write - create property if there is no own property in the object
obj2.x = 300;
console.log('Parent.x ', parent.x);

parent.x = 200;
console.log("Obj2.x ", obj2.x);
console.log("Parent.x", parent.x)

let obj3 = Object.create(parent);
obj2.items.push(1);
obj3.items.push(2);
console.log('obj2.item ', obj2.items); 
// 1 and 2 because of read the parent property items and push 

obj2.items = [];
console.log('obj3.item ', obj3.items); 