// collections of properties and functions 

// Requirement - want to save name, age and address of a student 

let name1 = "TK"; 
let age1 = 38;
let address1 = "Somewhere"; 

let name2 = "Aung Aung";
let age2 = 20;
let address2 = "Ygn";

function printInfo(name, age, address ) {
    console.log('Name: ', name , ' Age: ',age , ' Address: ', address);
}

printInfo(name1, age1, address2);

// name1, age2, address1 variables cannot be assumed as a unit 
// cannot relate between themselves 

let obj = {
    name: "TK", 
    age: 38, 
    address: "Somewhere",

    print:function()
    {
        console.log('Name: ', this.name , ' Age: ', this.age , ' Address: ', this.address);
    }
}
obj.print();

// Object can provide data abstraction - encapsulation 
// Object based language 
// Function vs Method 