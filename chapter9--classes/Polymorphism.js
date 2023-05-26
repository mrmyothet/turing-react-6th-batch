// 3 Pillars of OOP

// Inheritance
// Encapsulation
// Polymorphism

class Shape {
  draw() {
    console.log('Shape draw');
  }
}

class Circle extends Shape {
  draw() {
    console.log('Circle draw');
  }
}

class Rectangle extends Shape {
  draw() {
    console.log('Rectange draw');
  }
}

let shape = new Circle();
shape.draw();

shape = new Rectangle();
shape.draw();

// useful in extensible
// ATM - CB card -> call CB gateway
//       Yoma card -> call Yoma gateway

// Duck Typing
shape = {
  draw() {
    console.log('Another draw');
  },
};
shape.draw();

// Parent Type - Super Type
// Child Type
// child types can be assigned into parent types
// static programming languages depends on Sub Typing
