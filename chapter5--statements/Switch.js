// let month = +window.prompt('Enter month');
/*
if (month === 1) 
{
    console.log('January');
} else if(month === 2)
{
    console.log('February');
}
else if(month === 3)
{
    console.log('March');
}
*/

// direct jump 
// only check for equality === 
// cannot use in complex conditions 

month = +window.prompt('Enter month'); // number -> correct 
// month = window.prompt('Enter month'); // string -> cannot check 

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Others');
        break;
}