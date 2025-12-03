// functios

// function singHappyBirthday(){
//     console.log("happy birthday to you");
    
// }

// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday()


// adding of two numbers function
function AddTheNum(num1, num2 , num3){
    return num1 + num2 + num3;
}

let returnValue= AddTheNum(3 ,3 , 4) ;
console.log(returnValue);


// odd or even 

function isEven(number){
    if(number%2===0){
        return true;
    }
        return false;
    
}

console.log(isEven(2));


// create a function in which the first charcter is returned to you
// input = String 
// output = first character


// function theArray(isChemical){
//    console.log(isChemical[0]);
// }
// console.log(theArray("c"));

// create a function in which you have to pass an array and target 
// input = array and target 
// output = index of target if it is present in target


// const  myArray(array, target) {

//     for (let i = 0; i < array.length; i++) {
//         if (array[i]===target) {
//             return i;
//         }
        
//     }
// return -1;
// }

// const beArray = [1,2,3,4,5,6]

//  const khanArray = myArray(beArray,5)
// console.log(khanArray);


function myArray(array , target){
    for (let i = 0; i < array.length; i++) {
        if (array[i]===target) {
            return i;
        }
        
    }
    return -1 ;
}

const byArray = [1,2,3,4,5,6,7,8];
const ans = myArray(byArray,4);
console.log(ans);

// function expression


let myBirthDay = function(){
    console.log("happy birthday to you");
    
}
myBirthDay();
// sum of two number through function expression
let sumOfTwoNumbers = function(number1 , number2){
    return number1  + number2;
}

let khan= sumOfTwoNumbers(2,3);
console.log(khan);

// even number through function expression

let theEven = function(hammer){
    if (hammer%2===0) {
        return true;
    }
    return false;
}

let wali = theEven(2); 
console.log(wali);

// finding target through function expression

const heKhan = function (khanwali,targetwali){
    for (let i = 0; i < khanwali.length; i++) {
         if (khanwali[i]===targetwali) {
            return i;
            
         }
        
    }
return "not found"
}

let waliArray = [1,2,3,4,5,6,7,8];
let targetwali = 9;
let answali = heKhan(waliArray,targetwali);
console.log(answali);








// arrow function

const myOdd = (number)=>{
    return number % 2 === 1;
}

console.log(myOdd(3));
 

// sum of two numbers through arrow function

const numberSum = (number1,number2 )=>{
    return number1+ number2 ;
}

let arrowKhan = numberSum(3,4);
console.log(arrowKhan);

// hositing
// it is only useable in function decleration
// hositing is when you call the function before the initaization

hello();
function hello() {
    console.log("hello world");
    
}


// function inside a function
// i used here function inside a function 
 function ahmad() {
    const khane = (number1,number2)=>{
        return number1 + number2;
    }
    const mul = (num1,num2)=>{
        return  num1*num2;
    }
    console.log("hello where are you from baneeto ");
    console.log(khane(2,3));
    console.log(mul(2,3));
}
ahmad();


// lexcial scope
function myApp (){
    const myValue = "value1"
    function myFunc(){
        const myValue = "value 57"
        console.log("inside my func",myValue);
    }
    console.log(myValue);
    myFunc();   
}

myApp();



// blocked scope vs function scope

{
let name = "khan";
console.log(name);
}

{
const age = 22;
console.log(age);
}

if (true) {
    var city = "karachi";
    console.log(city);
}

function test(){
    if(true) {
        let country = "pakistan";
    console.log(country);
    }
    
}
test();


// default parameters 


function myVar(a,b){
    return a + b;
}

const khane = myVar(2,3);
console.log(khane);
// the upper is just a simple function 
// know we declear the default parameters

function gKhan1(a,b=1){
      return a + b;
}
const khanee = gKhan1(2,8);
console.log(khanee);


// rest parameters

function myRest(...args){
    let sum = 0;  
    for (let arg of args) {
        sum = sum + arg;   
}
return sum;
}
const khanRest = myRest(1,2,3,4,5,6,7,8,9);
console.log(khanRest);


// callback function

function func32 (name){
    console.log("hello there i am func32");
    console.log(`my name is ${name}`);
    
}


function func34(callback) {
    console.log("hello i am a func34");
    callback("Talha");
}

func34(func32);




// function returning a function

function supreme (){
    function hello(){
        return "hello i am form karachi"
    }
    return hello;
}
const asn = supreme ();
console.log(asn());

