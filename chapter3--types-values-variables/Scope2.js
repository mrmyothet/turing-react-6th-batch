function hello()
{
    console.log('Another ', another);

    second = 300;
    // variable without declaration goes to Global Scope 
    // goes into window namespace

}
// Global scope 
var another = 400;
console.log('Second ', window.second);
hello();

console.log('Second ', second);

// var - Disadvantage
var top = 300;
console.log('Top == 300 ', top==300); // false
// because window namespace already have top variable

// let top = 300;
// Uncaught SyntaxError: Identifier 'top' has already been declared

// LifeTime of the variable 

/*
Summary 
    just use let & const 

*/