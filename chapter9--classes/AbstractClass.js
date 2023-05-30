/*
Abstract class - 
Parent class that does not create objects from it - e.g Shape
Only child classes create objects - concrete subclass 

*/

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

shape = {
  draw() {
    console.log('Another draw');
  },
};
shape.draw();
