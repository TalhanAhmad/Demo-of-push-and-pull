
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// console.log(heading1.textContent);



// setTimeout(() => {
//     heading1.textContent = "Hi this is heading one";
//     heading1.style.color = "green";
// }, 1000);
// setTimeout(() => {
//     heading2.textContent = "Hi this is heading one";
//     heading2.style.color = "violet";
// }, 2000);



// Another way of setTimeOut

// setTimeout(()=>{
//     heading1.textContent = "hi my name is talha "
//     heading1. style . color = " blue"
//     setTimeout(()=>{
//           heading2.textContent = "i am a software developer "
//     heading2. style . color = " red";
//     },1000)
    
// },1000)





//Pratic on the give proccess
// this is also called callback hell

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(() => {
//     heading1.textContent = "Its the first heading";
//     heading1. style .color = "violet";
//     setTimeout(() => {
//          heading2.textContent = "Its the second heading";
//     heading2. style .color = "purple";
//     setTimeout(() => {
//          heading3.textContent = "Its the  third heading";
//     heading3. style .color = "red";
//     setTimeout(() => {
//          heading4.textContent = "Its the fourth heading";
//     heading4. style .color = "pink";
//     setTimeout(() => {
//          heading5.textContent = "Its the fifth heading";
//     heading5. style .color = "green";
//     setTimeout(()=>{
//          heading6.textContent = "Its the sixth heading";
//     heading6. style .color = "blue";
//     setTimeout(() => {
//          heading7.textContent = "Its the seventh heading";
//     heading7. style .color = "brown";
//     }, 1000);
//     },1000)
//     }, 1000);
//     },1000);
//     }, 1000);
//     }, 1000);
// }, 1000);



// doing the same stuff through functions 


function changeText (element,text,color,time,onSuccesscallback,onFailurecallback){
     setTimeout(() => {
          if (element) {
               element.textContent = text ;
               element. style .color = color ;
               if (onSuccesscallback) {
                    onSuccesscallback();
               }else{
                    if (onFailurecallback) {
                         onFailurecallback();
                    }
                    
               }
          }
     }, time);
}

changeText( headling1,"one","blue",1000);