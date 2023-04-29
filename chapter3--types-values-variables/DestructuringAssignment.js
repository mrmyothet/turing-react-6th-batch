
let a = 10;
let b = 20;
let [c,d] = [a,b];
// let [c,d] = [100, 200];

console.log('C ', c);
console.log('D ', d);

// is called array destructuring 

// useful case 
// return multiple values
// Go  - can return multiple values 
// Python - can return tuple
function div(a, b)
{
    if(b==0)
    {
        return [undefined, new Error("Division by zero")];
    }
    else
    {
        return [a/b, undefined];
    }
}

let [result, err] = div(20, 30);
if(err){
    console.log('Error ', err);
}
else{


}

// Problem 
let arr = [100, 200];
/*
let a = arr[0];
let b = arr[1]
*/

// Solution
// let [a,b] = arr;
// let arr = [100, 200, 300, 400, 500];
// let [a,b, ...c] = arr;
// c -> [300, 400, 500]
// ...c means assign remaining values to c
// ... must use in last item

// let [a,,b, ...c] = arr;
// b -> 300

// should not over-use 