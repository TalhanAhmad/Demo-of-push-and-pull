// function returning promise


function friedRice() {
const bucket = ["coffee","chips","vegetables","salt","rice"];

return new Promise((resolve, reject) => {
    if (bucket.includes("coffee")&& bucket.includes("chips")
    ) {
resolve("lets have some snacks")
        
    }else{
        reject("ohhh man we are out of stock")
    }
})    
}

friedRice().then(()=>{
    console.log("lets have some snacks");
    
}).catch((error)=>{
    console.log(error);
    
})