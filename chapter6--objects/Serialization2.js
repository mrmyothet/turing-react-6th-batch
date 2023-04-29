let circle = {
    x: 10, 
    y: 200, 
    privateData: 'Something', 
    toJSON: function()
    {
        console.log('toJSON called');
        let that = this;
        return {
            xPos: that.x, 
            yPOs: that.y
        }
    }
}

let str = JSON.stringify(circle);
console.log('JSON.stringify(circle) ', str);

console.log('JSON.parse');
let obj = JSON.parse(str, (key, value)=> {
    console.log('Key ', key , ' value ', value);
    return value;
}); 
console.log('Obj ', obj);