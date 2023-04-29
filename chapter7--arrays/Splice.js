const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb', 'Feb2');
console.log(months);

months.splice(1,2, 'February');
console.log(months);

months.splice(1, 1);
console.log(months);

let aprilIndex = months.indexOf('April');
months.splice(aprilIndex, 1);