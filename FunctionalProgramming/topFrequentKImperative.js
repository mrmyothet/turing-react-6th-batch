/*
input: nums = [1,1,1,2,2,3], k = 2
output: [1, 2]

*/

// Imperative approach
let arr = [1, 2, 3, 1, 1, 1, 2, 3, 3, 5, 5, 5];
let k = 2;

let group = {};
/*
{
    '1':4, 
}
*/
for (let i of arr) {
  if (group[i]) {
    group[i]++;
  } else {
    group[i] = 1;
  }
}
console.log('Group ', group);

let countArr = Object.entries(group);
console.log('CountArr ', countArr);
countArr.sort((a, b) => b[1] - a[1]);
console.log(countArr);
