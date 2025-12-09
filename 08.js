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

const user = {
    firstName : "Asmat",
    age : 23,       
    about : function(hobby,farmer ){
        console.log(this.firstName, this.age ,hobby  ,farmer);
    }       
}

const user2 = {
    firstName : "Wali khan",
    age : 22,       
}   
user.about.call(user2,"guitar","talha");