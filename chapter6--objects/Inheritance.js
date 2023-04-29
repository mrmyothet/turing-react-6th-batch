let parent = {
    data: 200,
    method: function()
    {
        console.log("Proptotype based inheritance");
    }
}

let child = Object.create(parent);
child.method();
let child2 = Object.create(parent);
child2.method();

console.log(child.unknown);
console.log(child.unknow.something);

// ES2020
console.log(child.unknown?.something);