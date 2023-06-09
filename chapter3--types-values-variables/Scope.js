// Function declaration and call
function hello()
{
    var data;

    console.log('Data ', data);
    // can use data variable because of function scope by declaring using var

    let c = 10; 
    console.log('Hello');
    {
        let a = 20;
        const k = 100;
        console.log('A ', a);

        // re-declare variable in another block scope - Ok
        let c = 300;
        console.log('C ', c);
    }
    // console.log('A ', a);
    // console.log('K ', k);
    // scope of a is between the block { }
    // block scope 
    
    // let c=100;
    // Uncaught SyntaxError: Identifier 'c' has already been declared

    // Function Scope 
    // var 
    // called hoisting 
    var data = "Something";
}

hello();
// console.log('C ', c);
// Uncaught ReferenceError: c is not defined

/* Summary
scope 
    function scope
    var 
    - hoisting
    - can re-declare   

block scope 
    let 
    const
*/