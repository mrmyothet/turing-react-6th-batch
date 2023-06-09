let obj = {
    __age: 20,
    get age()
    {
        console.log('Getter ');
        return this.__age;
    }, 
    
    set age(newValue)
    {
        console.log('Setter value ', newValue);
        if(newValue > 0 && newValue <= 120)
        {
            this.__age = newValue;
        }
    }
};

console.log('Obj.age ', obj.age);

// can use obj.__age , but Getter and Setter does not work if use obj.__age directly 
// there is a way to cover, to make private 
console.log('Obj.__age ', obj.__age);

obj.age = -100;
console.log('Obj.age ', obj.age);

obj.age = 30;
console.log('Obj.age ', obj.age);


let circle = {
    radius: 10, 
    get area()
    {
        return Math.PI * this.radius * this.radius;
    }
}

console.log('Circle ', circle.area);

// class based component -> functional component 
// imperative 
// javascript is not for truely object programming style 
// javascript is shine for functional programming 