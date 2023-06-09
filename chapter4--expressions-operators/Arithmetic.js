
let result = 'false' * 3;
console.log('Result ', result);

result = '' * 3;
console.log('Result ', result);

result = false * 3;
console.log('Result ', result);

result = '100' * 3;
console.log('Result ', result);

let obj3 = {

    name:'Maung Maung', 

    valueOf:function(){
        return '5';
    }
}
result = obj3 * 4;
console.log('Result ', result);

// Unary +  -> convert to number 
console.log('Result ', +obj3); // number 3

// Unary - -> 
console.log('Result ', -obj3); // number -3

// has side effect on the operand 
++obj3;
console.log('Result ', obj3);
console.log('Type ', typeof obj3);

--obj3;
console.log('Result ', obj3);
console.log('Type ', typeof obj3);

let name = obj3.name;
console.log('Name ', name);