class Engine {
  start() {
    console.log('Engine start');
  }
}

class ElectricEngine extends Engine {
  start() {
    console.log('Electric Engine start');
  }
}

class DieselEngine extends Engine {
  start() {
    console.log('Diesel Engine start');
  }
}

class Car {
  constructor(engine) {
    // This line breaks Open Close principle
    // because this line have to modify
    // this.engine = new Engine();

    this.engine = engine;
  }
  start() {
    console.log('Car start');
    this.engine.start();
  }
}

// let engine = new Engine();
// let engine = new DieselEngine();
let engine = new ElectricEngine();

let car = new Car(engine);
/* Inversion of control - control means object creation
Dependency Inversion - DI
Advantages 
  extensible for multiple engines
  it agrees Open Close principle

Dependency Injection used composition to inject dependency from outside 
*/

car.start();
