class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // Getter
  // also called computed property
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle(3);
console.log('Circle area', circle.area);

class Human {
  // Private Field
  #_age;

  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  // Setter
  // to use encapsulation
  set age(newAge) {
    if (newAge >= 0 && newAge <= 100) {
      this._age = newAge;
    }
  }

  get age() {
    return this._age;
  }
}

let h = new Human();
h.age = 300;
console.log('Age ', h.age); // undefined

h.age = 30;
console.log('Age ', h.age); // 30

// can set into hidden property - problem
h._age = 300;
console.log('h._age = 300', h.age); // 300
console.log(h);
