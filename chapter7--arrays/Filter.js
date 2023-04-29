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
        age: 23,
        gender: 'male'
    },
];

// imperative programming style 
let males = [];
for (let i = 0; i < arr.length; i++) {
    if(arr[i].gender == 'male')
    {
        males.push(arr[i]);
    }    
}
console.log('Males '+ males);

// function return true or false is called predicate function
function isMale(obj)
{
    return obj.gender == 'male';
}

function isAdult(obj)
{
    return obj.age > 25;
}

function getName(obj)
{
    return 'U ' + obj.name;
}

males = arr.filter(isMale)
           .filter(isAdult)
           .map(getName());
console.log('Males '+ males);

// imperative - conditional 
// functional - filter 