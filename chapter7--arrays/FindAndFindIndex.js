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
    {
        name: 'Aung Min', 
        age: 3,
        gender: 'male'
    },
];

function isFemale(obj)
{
    return obj.gender == 'female';
}
let firstFemale = arr.find(isFemale);
console.log(firstFemale);

let index = arr.findIndex(isFemale);
console.log(index);

function isAgeGt10(obj)
{
    return obj.age > 10;
}

let allAreOver10 = arr.every(isAgeGt10);
console.log('allAreOver10 ', allAreOver10);

let some = arr.some(isAgeGt10);
console.log('Some '+ some);
