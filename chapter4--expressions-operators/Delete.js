let obj = {
    name: "TK", 
    address: "Ygn"
};
delete obj.address;
// delete property of the object 
// address property is removed 
console.log(obj);

// cannot delete global variable - return false
var something = "something";
console.log("delete window.something ", delete window.something);
console.log("something ", something);

let arr = [1, 2, 3];
delete arr[2];
console.log("2 in a ", 2 in arr);// false 