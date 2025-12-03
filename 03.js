// intro to arrays 



//  they are referance type
//  order collection of items are called arrays mean  (index)
//  you can store any data type in array
let fruits = ["banana","apple","mango"]
fruits[1]= "gavava"
console.log(fruits);

let number = [1,2,3,4,5,6,6]
number[5]="67"
console.log( typeof number);
console.log((Array.isArray(number)));

// note: if you want to check that array is array you have tp use (isarray)
// because it will be shown as object in console..

// array can also be mixed
let array = ["banana",1,2,3,4,"byfather","bynature"]
console.log(array);


// using push and pop method
// arrays are mutable which is not used in primitive data type but it can be used in arrays

// (1)push() when you want something an element in last you have to use push

// let fruit = ["banana","apple","mango"]
// console.log(fruit);
// // push() used
// fruit.push("kamal" , "jamal")
// console.log(fruit);


// pop() removed the last element as well as return it also 

let fruita = ["banana","mango","apple","gvava"]
console.log(fruita);

// pop() used

 let popedfruita= fruita.pop();


console.log(popedfruita);
console.log("The poped fruit is", popedfruita);

// shift and unshift

let fruitz = ["banana","mango","apple","gvava"]
console.log(fruitz);


// shift used

fruitz.shift();
console.log(fruitz);

let fruitk = ["banana","mango","apple","gvava"]
console.log(fruitk);

// unshift used

fruitk.unshift("mangozz")
console.log(fruitk);



// refernece and primitive data type


// primitive

let num1=9;
let num2=num1;

console.log("value of num1 is",num1);
console.log("value of num2 is",num2);
num1++;
console.log("value of num1 after increment is",num1);
console.log("value of num2 after increment is",num2);

// notes:
// IN primitive datatype there are specific space in memory fo the values that you store each data has its own value in stack which are stored,
// so when you change in one data the other data will not be affected through it hat why they are primitive datatypes


// reference data type


let array1 = ["lahore","islamabad","balochistan"]
let array2= array1

console.log("array1 is ",array1);
console.log("array2 is ",array2);

array1.push("item3");
console.log("after pushing new item to array1")
console.log(array1);
console.log(array2);

// note:
// in refernce datatype there is space in heap where the array are store but the location of the heap are in the stack ,,here we have 2 arrays but having same location such as 0222 for the array1 and 0222 for array2 both having same location stored in
// the stack so when we do change in one array and because of the same location id the system takes it as the same for the both and chnage occure in both arrays
































