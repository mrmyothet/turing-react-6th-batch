let numbers = [2,3,4]; 
let result = 2**3**4;
console.log(result);

function power(a,b)
{
    console.log('A ', a + ' B '+ b);
    return b**a;
}

result = numbers.reduceRight(power);
console.log(result);