function Human(name, age) {
  this.name = name;
  this.age = age;
  this.work = function () {
    console.log('Name: ', this.name, ' Work');
  };
}

let obj = new Human('Tk', 38);
let obj2 = new Human('Aung Aung', 20);

obj.work();
obj2.work();
