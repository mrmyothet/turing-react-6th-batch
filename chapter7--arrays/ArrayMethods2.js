// Array.forEach - accept function 
let arr = [1, 2, 3, 10, 20];
function print(element, index, array)
{
    console.log('Element ', element + ' Index ' + index + ' Array '+ array);
}
arr.forEach(print);

// Map 
// return new array - immutable 
// use transform 
function double(x)
{
    return x * 2;
}
let doubleArr = arr.map(double);
console.log('Double Arr '+ doubleArr);
console.log('Arr '+ arr);   // original arr stays remain unchanged 