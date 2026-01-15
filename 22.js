// promise

// const bucket = ["coffee","chips","vegetables","salt","rice"];

// const myFriedRice = new Promise((resolve,reject)=>{
//     if (bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")) {
//         resolve("lets eat");
        
//     }else {
//         reject("failed");
//     }
// })


// myFriedRice.then((myFriedRice)=>{
//     console.log("lets eat","yeaahhhhhhh");
    
// }).catch((error)=>{
//     console.log(error);
    
// })


const bucket = ["coffee","chips","vegetables","salt","rice"];

const meCoocked = new Promise((resolve, reject) => {
    if (bucket.includes("coffee")&& bucket.includes("chips")
    ) {
resolve("lets have some snacks")
        
    }else{
        reject("ohhh man we are out of stock")
    }
})

meCoocked.then(()=>{
    console.log("lets have some snacks");
    
}).catch((error)=>{
    console.log(error);
    
})

