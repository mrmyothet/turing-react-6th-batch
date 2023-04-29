/* 
chess board

real world - 2 dimensional array is enough 

arr = [
    [1, 2, 3],  // row 0 
    [4, 5, 6]   // row 1
]

arr[0] -> [1, 2, 3]
arr[0][0] -> 1

*/

let arr = [
    [1, 2, 3], 
    [4, 5, 6]
];
console.log('Arr ', arr);
console.log('Arr[0] ', arr[0]);
console.log('Arr[0][1] ', arr[0][1]);
console.log('Arr[1][2] ', arr[1][2]);

let arr_3d = [
    [1, 2, 3], 
    [4, 5, 6], 
    [
        [7, 8, 9],
    ]
];
console.log('Arr [2][0][2] ', arr_3d[2][0][2]);

// Traverse multidimensional array 
for (let i = 0; i < arr_3d.length; i++) {
    console.log('Arr ['+i+']' + arr[i]);
    for (let j = 0; j < arr_3d.length; j++) {
        console.log('Arr[i][j] ', arr_3d[i][j]);        
    }
}