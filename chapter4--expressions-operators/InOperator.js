// In operator - to check key exist? 


let obj = {
    name: "TK", 
    age: 38
};

console.log("name in obj ", 'name' in obj);

let arr= [10,20,30];
console.log('1 in arr ', 1 in arr);
console.log('Arr [1]', 1 in arr);

arr = [10, undefined, 20, 30];
console.log();