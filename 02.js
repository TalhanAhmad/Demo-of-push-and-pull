// second day of learning javascript

//while loop
// you have to print the value from one to 10 with while loop
// in while loop the condition is checked and then it is executed!!

// let i = 0;

// while (i<=20) {
//     console.log(i);
//     i++;
    


// example of while loop
//while loop will ececute it self atleast one time 
// let num = 10;
// let total = 0;
// let i = 0;

// total = total + 1
// total = total + 2
// total = total + 3
// total = total + 4
// total = total + 5
// total = total + 6
// total = total + 7
// total = total + 8
// total = total + 9
// console.log(total);

let total = 0 ;
let i = 0;

while (i<=10) {
    total = total + i ;
    i++;
    
}console.log(total);

// both ways are right to do it by the right pratic is while loop 
// the i++ after the total if you dont use it  it will crash you run time use it care fully

//mathematical approach of this method we were doing in while loop

// (n*(n+1))/2


//for loop intro

for (let i = 0; i <=9; i++) {
    console.log(i);
}


// example of for loop

let kamal = 0 ; 
let jamal = 10000 ;

for (let z= 0; z<= jamal; z++) {
    kamal = kamal + z ;

    
}
console.log(kamal);

// uesage of break key word



//the break keyword stop the execution when the requiredis reached
for (let y = 0; y<=10 ; y++) {
    if (y==4) {
        break;
    }
    console.log(y);
}

//usage of continue keyword


// The continue keyword in JavaScript is
//  used within loops (like for, while, and do-while) 
// to skip the rest
//  of the current iteration and proceed
//  directly to the next iteration of the loop. 

for (let c = 0; c<=10 ; c++) {
    if (c==5) {
        continue;
    }
    console.log(c);
}


// do while loop
// the do while loop is executed atleast one time anyways if the condition is false aslo


let b = 11;

do {
    console.log(b);
    b++;
    
    
} while (b<=10);

console.log("the value of b is ", b);

//  second class over!!!!
