// promise.resolve
// promise chaining



const myPromise = Promise.resolve(5);
myPromise.then(value=>{
    console.log(value);
})

// then()
// then() method always return promise is ka faida ye ha ka ham s
// is sa promise ki chain produce kar sakte hain


function uPromise(){
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}

uPromise().then((value)=>{
    console.log(value);
    value += "bar";
    return value;
    
}).then((value)=>{
    console.log(value);
    value += "boooz";
    return value;
    
}).then((value)=>{
    console.log(value);
    
})

