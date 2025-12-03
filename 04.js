// spread operater
// used to concate two arrays

// let array1 = ["item1","item2","item3"]
// let array2 = ["item1","item2","item3"]
// console.log(array1);
// console.log(array2);

// let array3 = [...array1, ...array2]
// console.log(array3);


// for loop in array

let fruits =  ["item1","item2","item3"] ;

console.log(fruits);
console.log(fruits[fruits.length-1]);
console.log(fruits.length);



// just pratics propose or reminder of for loop
// for (let i = 0; i <=9; i++) {
//     console.log(i);
//     ;
    
// }


// here i used for loop for an array and then i changed them into upper case and then i store them in another array caled fruits2 with whole upper case
let fruits2 = [];

for (let i = 0; i < fruits.length; i++) {
    fruits2.push(fruits[i].toUpperCase());
    
}

console.log(fruits2);


//while loop on array 
const boy = ["apple","khan","ahmad"];

let i = 0 ;

while (i<boy.length) {
    console.log(boy[i]);
    i++;
    
    
}




