let obj = {
    x: 100, 
    y: 200, 

    // shorthand method 
    method: function() 
    {
        console.log('Method');
    }, 

    method2()
    {
        console.log('Method2');
    }

};

let obj2 = {... obj};
obj.method();
obj.method2();