class Shape {
  constructor() {
    console.log('Shape constructor');
  }
  draw() {
    console.log('Shape draw');
  }
}

// Delegation instead of Inheritance
// Composition
// Good in Software Enginnering

// Inheritance violates data encapsulation

class Circle {
  constructor() {
    this.shape = new Shape();
    console.log('Circle constructor');
  }

  draw() {
    // super.draw();
    this.shape.draw();
    console.log('Circle draw');
  }
}

let shape = new Circle();
shape.draw();
