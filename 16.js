// intro to events in javascript

// you can add events by three methods
// directly in html giving onclick attribute
// second by getElementBYId and then giving a function to it and call it
// The third on is the addEventListner which you can directly add events

    const btn = document.querySelector("#button");
    // function clickMe(){
    //     console.log("you clicked me");   
    // }
    // btn.addEventListener("click" , function(){
    //     console.log("yoooo clicked me dude");
        
    // });


    const btn2 = document.querySelectorAll(".my-buttons");
   btn2.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        console.log(e.currentTarget.textContent);
    });
   });