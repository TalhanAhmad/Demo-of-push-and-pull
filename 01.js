console.log("hello world");
//variable are those in which we store data and can use when needed and also we can change it

let firstName = "ahmad";
console.log(firstName);
// here we changed the value of the variable which was used early

// while changing the save value you dont need to use the let again
firstName = "khan";
console.log(firstName);


//while declearing the values the javascript is case sensitive
//so be careful while declearing he value
//example
let secondName = "abdul"
console.log(secondName);

secondname = "basit"
console.log(secondName);

//rules for writing names
//cant use a number
//example

// let 1value = "ahmad" invalid

//you can use number in last or in middle
//example

let value1 = "10"
console.log(value1);


//you can use underscore_ or dollor sign$
//example

let _firstName = "hasban khan"

console.log(_firstName);

let first_Name = "khanwali"
console.log(first_Name);

// u can not use spaces in the name of variable

//usually use camal and snake care

// camel case 
firstName = "g khan"
//snake case
first_name = "wali khan"

// let is launcned in es2016 and it has the same work as "var"


//declare const
//those values are use whivh can not be chnaged

const pi = "3.14"
console.log(pi);
// cant chaneg the value but you can mathematical opertares
// pi = "3.15"
// console.log(pi);


// string indexing


let thirdName = "TALHA"
//when you want to find the index use []these brakets
//and index is always started from 0 1 2 3 4 5 zero
console.log(thirdName[0]);
console.log(thirdName[1]);
console.log(thirdName[2]);
console.log(thirdName[3]);
console.log(thirdName[4]);

// findind length of a string
// length starts from 1
//when you need last index it is always {length-1}
let fourthName = "Talha"
console.log(fourthName[fourthName.length-3]);
// index aslo count spaces


//methods 
// (1) trim()

let herName = "mashal           "
console.log(herName);

console.log(herName.length);

herName=herName.trim();
console.log(herName);

console.log(herName.length);

// (2) toUppercase()
// change all the values to uppercase

let byName = "gulwali"
console.log(byName);

byName=byName.toUpperCase();
console.log(byName);

//(3) tolowwercase
//change all the values to lower case

let myName =  "khawali"
console.log(myName);

myName = myName.toLowerCase();
console.log(myName);

//(4)sclie
//when you want to sclice the value 

let hisName = "microbiology"

let newString = hisName.slice(5,8);
console.log(newString);


//primitive datatypes
//strings "ahmad", "22"
//numbers 0 1 2 3 4 5 
//boleans
//undefined
//null
//bigint
//symbols

//typeof

let age = 22

let herFather= "khanwali"

console.log(typeof age);
console.log(typeof  herFather);


let her = 22
let his = "mathematics"

//number into string
console.log(her);
console.log(typeof (her + ""));

// string into number
console.log(his);
console.log(typeof + his);

//when you want to change the number into string you have to do (+ "")
//when you want to chnage string into number you have to  (+ before) 

// string concatination(mean to join)

let firstCase =  "12"
let SecondCase= "12"

let fullCase= +firstCase +  +SecondCase;

console.log(fullCase);

//template string


let lived = 22
let uniName = "agricuture university"

// i need a like that looks like
// my age is 22 and i am student of agriculture university

// let aboutMe = "my age is "  + lived+  "  and i and student of " + uniName ;

let aboutMe = `My age is ${lived} and i am student of ${uniName}.`

//you have these both ways both have the same values but backticks are more professionals and usefull

console.log(aboutMe);

//undefined

let nameValue;
console.log(nameValue);

//null

//when you put null as a value and you check it typeof it gives you
// object which is an error or bug in javascript
let a = null
console.log(a , typeof a);

//BigInt

let myCourse = BigInt(123142412214);
let hisCourse = 12313123131n;

console.log(myCourse + hisCourse);

//booleans and comparisons operaters


//booleans are true and false between two values 
// they will be true or false 
// comparisons opearaters are those which compare 
// these two values and give you boolean value either
//  they are true or false
// > < , <= , >= (comparison operators)

let num1 = "40"
let num2 = 40

console.log(num1<=num2);
console.log(num1>=num2);

// == vs ===
// ==(only check values only in javascript) vs === (check value as will as datatype)

console.log(num1==num2);

console.log(num1===num2);

// != vs !==

console.log(num1 != num2);
console.log(num2 !== num1);


// if and else statement

let khan = 20

if (khan<=18) {
    console.log("The user can play game");
    
    
} else {
    console.log("you are child");
          
    
}

if (khan%2===0) {
    console.log("The value is even");
    


    
} else {
    console.log("The value is odd");
    
    
}


// ternary operator

let child=10 ;
let drink = child >10 ? "milk":"coffee";

console.log(drink);


let ages = 18
let result = ages >= 18 ? "adult" : "minor";
console.log(result);

let score=189;
let result1= score >=190 ? "pass": "fail"
console.log(result1);


//  && and || operators

let person = 22
let bypass = "Talha"

if (person>18 && bypass[0]==="T") {
    console.log("inside if");
    
    
}else{
    console.log("inside else");
    
}


let person2 = 22
let bypass2 = "alar"

if (person2<18 || bypass2[0]=== "s") {
    console.log("its inside");
    
    
} else {
    console.log("it not");
}


//else if with prompt option

let winningNumber = 20 ;

// use prompt here if you are studing again..
let userGuess = ("guess a number")


if (userGuess==winningNumber) {
    console.log("you guessed the right number");
    
} else {
    if (userGuess<20) {
        console.log("you are too low buddy guess again");
        
    }else{
        console.log("you are too high");
        
    }
    
}

// if, esle if concept

let temperatureOutside = -1;

if (temperatureOutside<0) {
    console.log("it is extreme cold outside");   
} else if (temperatureOutside<15) {
    console.log("the temperature is moderate outside");
    
}else if (temperatureOutside<25) {
    console.log("let have a swim ");
    
} else if (temperatureOutside<40) {
    console.log("turn on the ac");   
}else{
    console.log("be in door the out side is  hot");
    
}

// switch statement

let day = 9;


if (day==0) {
    console.log("todays monday");
    
}else if (day==1) {
    console.log("todays tuesday");
    
}else if (day==2) {
    console.log("todays wednesday");
    
}else if (day==3) {
    console.log("todays thursday");
    
}else if (day==4) {
    console.log("todays friday");
    
}else if (day==5) {
    console.log("todays saturday");
    
}else if (day==6) {
    console.log("todays sunday");
    
}else{
    console.log("supryyy bela rowaz kam da chi print kai ye delta");
    
}

// here is the example of witch statement

let days = 9;

switch (days) {
    case 1:
        console.log("monday here");
        break;
    case 2:
        console.log("tuesday here");
        break;
    case 3:
        console.log("wednesday here");
        break;
    case 4:
        console.log("thursday here");
        break;
    case 5:
        console.log("friday here");
        break;
    case 6:
        console.log("saturday here");
        break;
    case 7:
        console.log("sunday here");
        break;
   
        

    default:
        console.log("invalid day");
        
        break;
}

// first day over here!!!!!


 

















