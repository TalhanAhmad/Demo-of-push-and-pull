
// important methods of array


// forEach method()

const numbers= [1,2,78,9,0]

function myFunc(number,index){
    console.log(`index is ${index} and the number is ${number}`);
    // console.log(`${number}*2 = ${number*2}`);
    
    
}
// numbers.forEach(myFunc);
// multiplyByTwo(numbers[0],0);
// multiplyByTwo(numbers[1],1);
// multiplyByTwo(numbers[2],2);
// multiplyByTwo(numbers[3],3);
// multiplyByTwo(numbers[4],4);

//  for(i=0 ; i<numbers.length; i++){
//      myFunc(numbers[i],i)
//  }

// forEach() method example
// const walikhang = [9,4,5,6,7]
// function aSmat(walikhang , index){
//     console.log(`index is ${index} and the number is ${walikhang}`);
//     console.log(`${walikhang}*3 = ${walikhang*3}`);
    
// }
// walikhang.forEach(aSmat);

// another way forEach

// const myName = [7,8,6,5,4,3]

// myName.forEach(function(song,index){
//     console.log(`index is ${index} and the song is ${song}`);
// })


const myQueen = [1,2,3,4,5,6]

myQueen.forEach(function(salam,index){
    console.log(`the number is ${salam} and the index is ${index}`);
    console.log(salam*2);
    
})

const users = [
    {firstName : "Asmat" , age : 23},
    {firstName : "Wali khan" , age : 22},
    {firstName : "Ali" , age : 25},
    {firstName : "Ahmed" , age : 24},
]

users.forEach(function(user){
    console.log(user.firstName);
    
})
// you can aslo do it throuhg arrow function

users.forEach((user, index)=>{
    console.log(user.firstName , user.age , index);
})

// y0u can do the same through the forOF  loop but forEach()is best method for this looping and is used through larger scale
for (let user of users){
    console.log(user.firstName);
}

// map method()::

// map return an array which is used in react in most of the cases
const number1 = [4,5,6,4,5,6]

function square (number){
    return number * number;
}
const salamwali = number1.map(square);
console.log(salamwali);


const  family = [
    { firstName : "Khan", age : 23 },
   { firstName : "gul",age:47 },
]



const yourFamily  = family.map((Element)=>{
    return Element.firstName;
})

console.log(yourFamily);


// filter method()::
// filter is used for boolen values 


const array = [1,23,43,56,78,98,32,1,23,45]

 const onlyEven=array.filter((even)=>{
     return  even%3===0
})
console.log(onlyEven);


// reduce method()
// is used to reduce an array 

const karachi = [1,2,3,4,5,6,7,8,9]


const city =  karachi.reduce((accumulater, currentValue)=>{
    return accumulater + currentValue;
})
console.log(city);
// real time example of reduce method
const karachiProduct = [
    {product1 : "phone", price : 5890000},
    {product2 : "charger", price : 5600},
    {product3 : "tv", price : 60000},
]
 const products =    karachiProduct.reduce((totalprice , product)=>{
    return     totalprice + product.price ;
},0)

console.log(products);


// sort method()

const sortArray = [1,3,5,4,6,4,3,2,7,6]

const values= sortArray.sort((a,b)=>{
    return b-a;
})
console.log(values);


// find method()
// find method is used to find a single value from an array


const hisArray  = ["car","bike","sportsCars","heavy Bikes"];

const herArray =  hisArray.find((user)=>{
    return user.length ===11 ;
})
console.log(herArray);

// real time example of find method()

const user00 = [
    {userName : "gul khan",userId : 1},
    {userName : "gul ",userId : 2},
    {userName : " khan",userId : 3},
    {userName : "wali khan",userId : 4},
]

const usertypr = user00.find((bro)=>{
    return bro.userId===2;
})
console.log(usertypr);




// every method()
// if any of the statement got false it will return false

const karachiProductz = [
    {product1 : "phone", price : 5890000},
    {product2 : "charger", price : 5600},
    {product3 : "tv", price : 60000},
]

 const bonus = karachiProductz.every((cartproduct)=>{
    
return cartproduct.price>50002;
})
if (bonus){
    console.log("you are eligible for bonus");
}
console.log(bonus);


// some method()
// if any of the statement got true it will return true
const karachiProductzz = [
    {product1 : "phone", price : 5890000},
    {product2 : "charger", price : 5600},
    {product3 : "tv", price : 60000},
]

const price =karachiProductzz.some((agar)=>agar.price>5000);
if (price===true){
    console.log("congratulation you are great to get bonus");
    
}
console.log(price);

// fill method () 
// value , start , end

const mySchool = [0,0,0,0,0,0];
mySchool.fill(-1);
console.log(mySchool);
// if u want to fill some value to the give array u can use fil method of the array 
const theNumber = [1,2,3,4,5,6,7,8];
theNumber.fill(23,3,8);
console.log(theNumber);

// splice method 
// used when you want to delete r insert in the middle of array 
// start , delete , insert


// deleting items from  array 

const arrayByME = ['ITEM1', 'ITEM2','ITEM3',]
arrayByME.splice(0,1, );
console.log(arrayByME);

// inserting items from the array

const byME = ['ITEM1', 'ITEM2','ITEM3',]

byME.splice(2,'',"localstorage");
console.log(byME);

// iterable 
// string , array , maps , sets are iterable
// jis par ham for of loop laga sakien us ko iterable bolte 

// String
const vcName = "harshit";
for ( let char of vcName){
    console.log(vcName.length);
}

// array 

const kyKing = ["item1","item2","item3"]
 for (let user of kyKing){
    console.log(kyKing);
    console.log(kyKing.length);
 }
