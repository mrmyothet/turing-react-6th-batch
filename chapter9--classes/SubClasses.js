class Shape {
  constructor() {
    console.log('Shape constructor');
  }
  draw() {
    console.log('Shape draw');
  }
}

class Circle extends Shape {
  constructor() {
    super();
    console.log('Circle constructor');
  }

  draw() {
    super.draw();
    console.log('Circle draw');
  }
}

class Rectangle extends Shape {
  constructor() {
    super();
    console.log('Rectangle constructor');
  }
  draw() {
    super.draw();
    console.log('Rectange draw');
    this.anotherMethod();
  }
  anotherMethod() {
    console.log('another method');
  }
}

let shape = new Circle();
shape.draw();

console.log('---');

shape = new Rectangle();
shape.draw();
