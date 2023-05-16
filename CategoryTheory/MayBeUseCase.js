// MayBe UseCase
const MayBe = (value) => ({
  value,
  isNothing() {
    return value === undefined || value === null;
  },
  map(fn) {
    return this.isNothing() ? MayBe(null) : MayBe(fn(value));
  },
});

MayBe.of = MayBe;

let employees = {
  //   ids: [1, 2, 3, 4],
  data: {
    1: {
      name: 'Mg Aung',
      age: 23,
    },
    2: {
      name: 'Aung Min',
      age: 39,
    },
    3: {
      name: 'Mya Mya',
      age: 30,
      superVisor: 2,
    },
    4: {
      name: 'Hla Hla',
      age: 30,
      superVisor: 1,
    },
  },
};

// Imperative Implementation
// multiple if statement for safety
function getSuperVisorName(employeeId) {
  let employee = employees.data[employeeId];

  if (employee) {
    if (employee.superVisor) {
      let superVisor = employees.data[employee.superVisor];
      return superVisor;
    }
  }
}
console.log('superVisor 2 ', getSuperVisorName(2));
console.log('superVisor 3 ', getSuperVisorName(3));

// Functional Implementation
const getEmployeeById = (empId) => employees.data[empId];
const getSuperVisor = (employee) => employees.data[employee.superVisor];
const getName = (employee) => employee.name;

// output of one function is input of another function
// to easily compose

let empId = -1;
let result = MayBe.of(empId)
  .map(getEmployeeById)
  .map(getSuperVisor)
  .map(getName);

console.log('Result ', result);
