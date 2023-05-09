let students = [
  {
    name: 'Eddy',
    score: 58,
    gender: 'Female',
    city: 'Mandalay',
  },
  {
    name: 'Another',
    score: 58,
    gender: 'Female',
    city: 'Mandalay',
  },
  {
    name: 'Jack',
    score: 58,
    gender: 'Male',
    city: 'Mandalay',
  },
];
const names = R.pluck('name')(students);
console.log(names);
