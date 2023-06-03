/*
valid values for JSON

*/

let obj = {
  name: 'Tk',
  age: 38,
  milestones: ['Nothing', 'Something'],
  _: 'Data',
  display() {
    console.log('This name', this.name);
  },
};

let str = JSON.stringify(obj);
console.log('JSON.stringify(obj) ', str);

let obj2 = JSON.parse(str);
console.log('obj2 = JSON.parse(str)');
console.log(obj2);
// not include function

console.log('parse customiztion');
obj2 = JSON.parse(str, (key, value) => {
  if (key === '_') {
    return undefined;
  }
  return value;
});
console.log(obj2);

str = JSON.stringify(obj, ['name', 'age']);
console.log(str);

// requirement - name should be username when stringify
// use toJSON function

let address = {
  city: 'YGN',
};

let user = {
  name: 'username',
  credential: 'Something',
  address: address,
  toJSON() {
    console.log('ToJSON');
    let that = this;
    return {
      username: that.name,
      address: that.address,
    };
  },
};

let str2 = JSON.stringify(user);
console.log('str2 ', str2);
