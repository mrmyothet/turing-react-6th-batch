let arr = [
    {
        name: 'Tk', 
        age: 38,
        gender: 'male'
    }, 
    {
        name: 'Hla Hla', 
        age: 38,
        gender: 'male'
    }, 
    {
        name: 'Aung Aung',
        age: 29,
        gender: 'male'
    },
    {
        name: 'Mya Mya', 
        age: 30,
        gender: 'female'
    },
];

// Imperative programming style - trigger function 
let names = [];
for (let i = 0; i < arr.length; i++) {
    names.push(arr[i].name);
}
console.log(names);
console.log(typeof names);

// functional programming - map - transform 
// declarative - expressive 
let names2 = arr.map(obj => obj.name);
console.log('Names '+ names2);
console.log(typeof names2);

// imperative - for 
// functional - map