// Engine is part of Car
// part of relationship

class Engine {
  start() {
    console.log('Engine start');
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
  }
  start() {
    console.log('Car start');
    this.engine.start();
  }
}

let car = new Car();
car.start();
