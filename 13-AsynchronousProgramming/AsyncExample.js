/* single programming 

CPU 
Memory 
IO 

problem of single programming -> not efficient usage for resources
eg. command-prompt 

multi-programming 
multiple-process - multiple programs 

process needs resources - CPU, 
fs.readFileSync()
file reads -> IO - take times - Latency 

Pre-emptive scheduling
- release the usage of CPU
- process switching 

people can have one mind at a time. 
can see, can hear 

CPU - 1 core - 1 process at a time
multi-core - can run process at multiple core

Take-away 
- when a process is reading IO, it don't need CPU 
- it is blocked - need to release the usage of CPU for other processes

*/

// content = fs.readFileSync('Hello.txt') // 500 ms
// other code 

/*

Asynchronous model analogy 

City Mart   - counter processing 
Lotteria    - counter processing 

Power of Asynchronous 
efficient but not fast 

problem of asynchronous 

*/

// function doSomethingAsync() {
//     console.log('Do something executed')
//     setTimeout(() => {
//         console.log('DoSomething done')
//         return "Data";
//     }, 2000);
// }

// console.log('Before')
// result = doSomethingAsync()
// // non-blocking code 
// console.log('End', result) // undefined - problem of async code 


function doSomethingAsync(callback) {
    console.log('Do something callback executed');
    setTimeout(() => {
        console.log('DoSomething Done');
        callback("returned Data")
    }, 2000);
}

doSomethingAsync((data) => {
    console.log('DoSomething done result ', data)
})
console.log('End')

// why asynchronous
//      problem
//          how we solve with callback

// Order of execution 
