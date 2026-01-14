// // setInterval

// console.log("script start");

// setInterval(()=>{
//     console.log("hello interval");
    
// },1000)

// console.log("script end");











const body = document.body ;
const button = document.querySelector("button");
button.addEventListener("click",()=>{
    clearInterval(intervalId);
    button.textContent = body.style.background ;
})


const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random()* 126);
    const green = Math.floor(Math.random()* 126);
    const blue = Math.floor(Math.random()* 126);
    const rgb = `rgb(${red},${green},${blue})`
    body.style.background = rgb
    console.log(intervalId);
    
},1000)



