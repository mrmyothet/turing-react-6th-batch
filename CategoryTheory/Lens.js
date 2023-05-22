const person = {
  name: 'Randy',
  socialMedia: {
    github: 'randycoulman',
    twitter: '@randycoulman',
  },
};

const nameLens = R.lens(R.prop('name'), R.assoc('name'));
const twitterLens = R.lens(
  R.path(['socialMedia', 'twitter']),
  R.assocPath(['socialMedia', 'twitter'])
);
console.log('R.view(nameLens, person):', R.view(nameLens, person));

let another = R.set(nameLens, 'Name Updated', person);
console.log('another:', another);

console.log(
  'R.over(nameLens, R.toUpper, person):',
  R.over(nameLens, R.toUpper, person)
);

console.log('Original Person:', person);
// does not change
