let myan = +window.prompt('Enter myanmar mark');
let eng = +window.prompt('Enter english mark');
let math = +window.prompt('Enter math mark');

/*
if (myan >= 40) {
    if (eng >= 40) {
        if (math >= 40) {
            console.log('Pass');
        }
        else
        {
            console.log('Fail');
        }
    } else {
        console.log('Fail');
    }
} else {
    console.log('Fail');
}
*/

if(myan >= 40 && eng >= 40 && math >= 40)
{
    console.log('Pass');
}
else
{
    console.log('Fail');
}