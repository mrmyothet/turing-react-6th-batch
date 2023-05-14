// Union
type color = 'red' | 'green' | 'blue';
let data : color = 'red';
data = 'green';

// data = 'something';
// 'something' is not assignable to type 'color'

type Circle = {
    typeName: string, 
    radius : number,
};

type Rectange = {
    typeName: string, 
    width: number, 
    height: number,
}

type Shape = Circle | Rectange;
// Shape becomes Algebraic Data Type 

// Intersection 
type Nameable = {
    name: string,
}

type Ageable = {
    age: number,
}

type Dog = Nameable & Ageable;

let dog: Dog = {
    name: 'Sam', 
    age: 3
}
// Dog becomes Algebraic Data Type 
