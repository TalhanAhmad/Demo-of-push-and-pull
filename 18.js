// sycnchrounus programming VS asynchronous programming
// synchronous programming
// is single threaded 

// console.log("script start");

// for(let i = 0; i<1000 ; i++){
//     console.log("inside the for loop");
// }
// console.log("script end");


// setTimeout 


console.log("script start");

 const id = setTimeout(()=>{
    console.log("inside setTimeout");

},1000)


for (let i = 0 ; i < 100 ; i++){
    console.log(".....");
    
}
// function hello() {
//     console.log("hello world ");
// }
// setTimeout(hello,1000);

console.log("script end");

// cleartime out clear the settimeout which you have provided to the browser
// clearTimeout(id);


// setIntervals 
// console.log("script start");
// setInterval(()=>{
//     console.log(Math.random());
    
// },100);
// console.log("script end");


