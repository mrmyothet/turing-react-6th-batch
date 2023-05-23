// Object Literal Problem

let obj = {
  name: 'Tk',
  age: 38,
  work() {
    console.log('Name', this.name, ' work');
  },
  display() {
    console.log('Name', this.name, ' Age ', this.age);
  },
};

obj.display();

// to construct many objects the same properties
// class - generalization, factory, template
// object - product from factory

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log('Human constructor ');
  }
  work() {
    console.log('Name', this.name, ' work');
  }
  display() {
    console.log('Name', this.name, ' Age ', this.age);
  }
}

let obj2 = new Human('Another ', 30);
let obj3 = new Human('Aung Aung', 20);
console.log('obj2 :', obj2);
console.log('obj3 :', obj3);

/*

OOP - property, method - combine - encapsulation 
FP  - separate functions used on data - not combined in one place 

encapsulation 
    working on its own properties 
inheritance 
    behavior reuse - properties and methods 
    Modeling - real-world Taxonomy
    create new types from existing ones

*/

class Teacher extends Human {
  constructor(name, age, school) {
    super(name, age);
    this.school = school;
  }
}

let teacher = new Teacher('Sayar U Maung Maung', 40, 'YTU');
teacher.display();
