let obj = {
  name: 'Tk',
  age: 23,
  score: -30,
};

let another = {
  ...obj,
  age: obj.age + 1,
  address: {
    city: 'Kalaw',
    state: 'Shan',
  },
};

function assoc(propName, value, obj) {
  return {
    ...obj,
    [propName]: value,
  };
}
let clone = assoc('age', 50, obj);
console.log('Obj', obj);
console.log('clone', clone);
