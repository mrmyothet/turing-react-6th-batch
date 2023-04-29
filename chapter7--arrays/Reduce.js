/* 
[1,2,3,5]
reduce (a,b) => c 

1,2 => 3
[3,3,5]
3,3 => 6
[6,5]
6,5 => 11
*/

let numbers = [1, 2 , 3 , 5, 20, -10, 5];
function add(a,b)
{
    console.log('A '+ a + ' B ', b);
    return a+b;
}
let total = numbers.reduce(add);
console.log('Total '+ total);

function min(a, b)
{
    return a<b ? a: b;
}
let smallest = numbers.reduce(min);
console.log('Smallest '+ smallest);

let arr = [
    {
        name: 'Tk', 
        age: 38,
        gender: 'male'
    }, 
    {
        name: 'Hla Hla', 
        age: 38,
        gender: 'female'
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

let group = {};
/*
group['male'] = [male1, male2]
*/

for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    if(group[obj.gender]){
        group[obj.gender].push(obj);
    } 
    else
    {
        group[obj.gender] = [obj];
    }
}
console.log(group);

// FP
// function groupBy(group, obj)
// {
//     return group[obj.gender] ? (group[obj.gender].push(obj), group)
//                              : ();
// }
// group = arr.reduce(groupBy, {});
// console.log(group);