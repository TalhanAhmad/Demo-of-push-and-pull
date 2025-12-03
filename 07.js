
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