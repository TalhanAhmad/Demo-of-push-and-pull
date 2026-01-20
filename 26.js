const xhr = new XMLHttpRequest();
function myPromise((resolve, reject) => {
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            } else if (xhr.readyState === 4) {
                reject(new Error("Request failed"));
            }
        };
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
        xhr.send();
    });
})

myPromise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
}0);



function myPromise(resolve, reject) {
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function() {                   
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            }
            else if (xhr.readyState === 4) {
                reject(new Error("Request failed"));
            }       