// understand callback


// function myFunc (callback){
//     console.log("system is doing first task");
//     callback();
// }

// function myFunc2(){
//     console.log("system is doing second task");
// }

// myFunc(myFunc2);

// callbacks which are only used in synchronus programming

// function getTwoNUmber(number1, number2){
//     console.log(number1 ,number2);
// } 

// function addTwoNumbers (number1 ,number2 ){
//     return number1 + number2 ;
// }

// getTwoNUmber(2,3);


function addTwoNumberAndAdd(number1, number2, onSuccess ,onFailure){
    if (typeof number1 ==="number" && typeof number2 ==="number") {
        onSuccess(number1 , number2);
    }else {
        onFailure();
    }
}

function addTwoNumber(numb1, numb2) {
    console.log(numb1 + numb2);
}

function onFail(){
    console.log("wrong data");
    console.log("please enter the correct data");
}

addTwoNumberAndAdd(2,"2",addTwoNumber,onFail);
