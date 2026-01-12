// intro to events in javascript

// you can add events by three methods
// directly in html giving onclick attribute
// second by getElementBYId and then giving a function to it and call it
// The third on is the addEventListner which you can directly add events

 
    // function clickMe(){
    //     console.log("you clicked me");   
    // }
    // btn.addEventListener("click" , function(){
    //     console.log("yoooo clicked me dude");
        
    // });


    // const btn = document.querySelectorAll(".my-buttons");
   
    // const btn = document.querySelectorAll(".my-buttons");
    // btn.forEach((button)=>{
    //     button.addEventListener("click", function(e){
    //         console.log("you clicked me",button.textContent);
    //     });
    // })

//     // praticc on click events 

//     const allButtons = document.querySelectorAll(".my-buttons button");
//     // console.log(allButtons.length);
    

//    allButtons.forEach(button=>{
//     button.addEventListener("click", (e)=>{
//         console.log(e.target);
        

//     })
//    })

   

// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach(button=>{
//     button.addEventListener("click",(e)=>{
//         console.log(e.target);
        
//     })
// })


const ALi = document.querySelectorAll(".my-buttons button");

ALi.forEach(button=>{
    button.addEventListener("click", (e)=>{
        console.log(e.target);
        e.target.style.backgroundColor = "green";
        e.target.style.color = "red";
    })
})