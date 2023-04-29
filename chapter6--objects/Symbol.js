// Symbol is used by framework designer 

// unique name 
let prop =  Symbol("i");
let prop2 = Symbol("i");
console.log('prop == prop2 ', prop == prop2); // false

let obj = {
    [prop]: 1, 
    [prop2]: 100
};

console.log('Obj having symbol properties ', obj );