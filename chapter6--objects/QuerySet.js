let obj = {
    value: 100,
    'main title': "Title"
}

console.log('Obj.value ', obj.value);

let propName = "value";
console.log('Obj[value]', obj[propName]);
console.log('Obj[main title]' , obj['main title']); // shoud not use 


// associative arrary 
let obj2 = [];
obj2['name'] = "Name";