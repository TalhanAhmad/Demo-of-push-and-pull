// // get and set attributes
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute ( "href","https://upwork.com");
// console.log(link.getAttribute("href"));


// // get multiple items by get elements by class name 

// const navitem = document.getElementsByClassName("navitem");
// console.log(navitem);

// // // select elements by using queryselecterAll
// const number = document.querySelectorAll(".navitem");
// console.log(number);

// loop through nav items and style
// you can not use forEach to iterate through HTML Collection
const navitems = document.getElementsByTagName("a");
console.log(navitems);

// for (let i=0; i<navitems.length; i++){
//     const item = navitems[i];
//     item.style.backgroundColor = "#fff";
//     item.style.color = "green";
//     item.style.fontWeight = "bold"

// }

// for(let navitem of navitems){
//      navitem.style.backgroundColor = "#fff";
//     navitem.style.color = "green";
//     navitem.style.fontWeight = "bold"
// }