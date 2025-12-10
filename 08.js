// methods 
// function inside an object
function personInfo(){
        console.log(`The user name is ${this.firstName} and the user age is ${this.age}`);
    }
const body1 = {
    firstName : "mohit",
    age: "42",
    about : personInfo
}
const body2 = {
    firstName : "mohiteee",
    age: "32",
    about : personInfo
}
const body3 = {
    firstName : "mohitzzz",
    age: "21",
    about : personInfo
}

body1.about();
body2.about();
body3.about();

// this and window object

// console.log(this);
// console.log(window);


function myfunc(params) {
    console.log(this);
    
}
myfunc();
// when you call it it will give you object but if you use strich mood then it will give undefined

function myfunc1() {
 "use strict";
    console.log(this);
}
myfunc1();


// call apply and bind



// using call method
  function about(hobby,farmer ){
        console.log(this.firstName, this.age ,hobby  ,farmer);
    }   

const user = {
    firstName : "Asmat",
    age : 23,       
       
}

const user2 = {
    firstName : "Wali khan",
    age : 22,       
}   
about.call(user,"guitar",`father name is khan`);


// using apply method
// apply is aslo like call but when you call the values in call singly is know passed in array


  function about(hobby,farmer ){
        console.log(this.firstName, `age is ${this.age}` ,hobby  ,farmer);
    }   

const user01 = {
    firstName : "Asmat",
    age : 23,       
       
}

const user02 = {
    firstName : "Wali khan",
    age : 22,       
}   
about.apply(user02,[`he want to play guitar`,`his father is a farmer `]);


// using bind method()
// bind always return you a func which you can call later i you want it anywhere

function about(hobby,farmer ){
        console.log(this.firstName, `age is ${this.age}` ,hobby  ,farmer);
    }   

const user03 = {
    firstName : "Asmat",
    age : 23,       
       
}

const user04 = {
    firstName : "Wali khan",
    age : 22,       
}   

const func = about.bind(user03,`he loves to play guitar`,   `his father support him in any of the condition `)
func();

// DO NOT DO THIS MISTAKE

const user05 = {
    firstName : "Wali khan",
    age : 22,      
    about : 
        function(){
            console.log(this.firstName,this.age);
        }
}   
// do not do this 
 const func2 = user05.about;
 func2();

//  do this instead 
// u have to bind the values as well

 const func3 = user05.about.bind(user05);
 func3();

//  this key word in case of arrow function
firstName = "khanzada"
age = 22
// here are the surrounding (this) decleared so the this
//  take ot from here and not from in the object

const user06 = {
    firstName : "Wali khan",
    age : 22,      
    about : ()=>{
            console.log(this.firstName,this.age);
        }
}

user06.about();
// as u see you got undefined so in case of 
// arrow function the this keyword take the (this)
//  for the surrounding instead in the object you have
//  decleared


// proto , prototype , class





// function createUser(firstName,lastName,age,email,address){ 
//     const userz1 = {};
//     userz1.firstName = firstName;
//     userz1.lastName = lastName;
//     userz1.age = age;
//     userz1.email = email;
//     userz1.address = address;
//     userz1.about = function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     }
//     userz1.is18 = function(){ 
//           return this.age >= 18;     
//     }

//    return userz1;
// }
// const user1 = createUser("Asmat","khan",23,"zablerkhanahmad@gmail.com","my address is here");   
// const user07 = createUser("Wali","khan",17,"my@email.com","my address is here");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user07);
// console.log(user07.about());
// console.log(user07.is18());


// making the same more accurate using object.create

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;   
    },
    is18 : function(){ 
          return this.age >= 18;     
    }
}
function createUser1(firstName,lastName,age,email,address){ 
    const userz2 = Object.create(userMethods);
    userz2.firstName = firstName;
    userz2.lastName = lastName;
    userz2.age = age;
    userz2.email = email;
    userz2.address = address;
    return userz2;
}
const user08 = createUser1("Asmat","khan",23,"zablerkhanahmad@gmail.com","my address is here");
const user09 = createUser1("Wali","khan",17,"my@email.com","my address is here");
console.log(user08);
console.log(user08.about());
console.log(user08.is18());
console.log(user09);
console.log(user09.about());
console.log(user09.is18());  

// adding more methods to the object 
// here  i added sing method to the userMethods object
userMethods.sing = function(){
    return "toon na na na la la ";
}
console.log(user08.sing());
console.log(user09.sing());
// =====================================================
const myMethods = {about : function(firstName,age){
        return `${this.firstName} is ${ this.age} years old.`;   
    },
    is18 : function(){ 
          return this.age >= 18;  

    },
        singoo : function (){
            return `la la la la la la`
        }
}
function userCom(firstName,lastName,age,email,address){
    const userKhan= Object.create(myMethods);
userKhan.firstName = firstName ;
userKhan.lastName = lastName ;
userKhan.age = age ;
userKhan.email = email ;
userKhan.email = address ;
return userKhan;
}

const firstUser = userCom("Talha","Ahmad","23","zablerkhanahmad@gmail.com","myaddress is here");
console.log(firstUser.about());
console.log(firstUser.about());
console.log(firstUser.is18())
console.log(myMethods.about(firstUser));

