// const khawali = document.querySelector("button");
// const body = document.body;
// const currentColor = document.querySelector(".current-color");
// console.log(currentColor);




// function randomColorGenerator() {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue= Math.floor(Math.random() * 256);
//     const randomColor = `rgb(${red},${green},${blue})`;
//     return randomColor ;
// }


// khawali.addEventListener("click",()=>{
//    const randomColor = randomColorGenerator();
//   body.style.backgroundColor = randomColor;
//    currentColor.textContent = randomColor;

    
// })



const khanwali = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");
console.log(currentColor);

function randomColorGenerator() {
    const red=  Math.floor(Math.random()*251);
    const  green=  Math.floor(Math.random()*252);
    const blue=  Math.floor(Math.random()*250);
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;

}

khanwali.addEventListener("click",()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
    
})