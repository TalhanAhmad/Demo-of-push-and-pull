// objects 

// objects are aslo reference type
// array are not suffiecent as compared to the objects
// object store key values pair
// ang object dont hava any index

// how to create an object

const person = {
    personName : "Talha",
    age : 22 ,
    gender : "male",
    address : "peshawer",
    
}
console.log(person);


// hwo to access data from an object

// let you want to access gender from the data 

console.log(person.gender);
// you can access any thing through . notation from the object you created

// you can aslo store array in an object example are given below

const herName  = {
    byfather : "AHmad ali",
    father : " ali",
    by : "khan",
    hobbies : ["rabab","traveling","gaming"],

}
// as i store hobbies as nan array in object and summon it using dot notation

console.log(herName);
console.log(herName.hobbies);

// how to add key value pair to the excisting object 

herName.gender = "female";
console.log(herName);

//  computed properties
// while computation you have to use [] brackets to the key or asny decleared values

const key1 = "objkey1"
const key2 = "objkey2"

const value1 = "myvalue1"
const value2 = "myvalue2"

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }


const obj = {
[key1] : "myvalue1",
[key2] : "myvalue2",
}
console.log(obj);

// spread operator used in objects

const obj1 = {

    brother : "khan",
    second : "ahmad",
    village : "turlandi"
}

const obj2 ={
    father : "ahmad",
    czn : "ali"
}

console.log(obj1,obj2);

const togather = {...obj1,...obj2,  key : "values"}
const newObject = {..."abcdefghijklmnopqrstuvwxyz"}
console.log(newObject);

console.log(togather);



// object destructring

const band = {
    bandName : "zeppelin",
    famousSong : "kashmir",
    year : 1980 ,
    anotherFamousSong : "khanwali ustasd"
}

let {bandName:var1 ,famousSong:var2,...restprops} = band
console.log(var1);
console.log(var2);
console.log(restprops);

// object inside array
// useful inside in real world 

const objs = [
    {name : "talha" , age : 22},
    {name : "ahmad" , age : 21},
    {name : "ali" , age : 23},  

]

for (let obj of objs){
    console.log(obj.name);
    console.log(obj.age);
}


// nasted destructring 
// const [] = users

const users = [
    {userId : 1 , userName : "talha", gender : "male"},
    {userId : 2 , userName : "boy", gender : "male"},
    {userId : 3 , userName : "girl", gender : "female"}
    ]

    const [user1,user2,user3] = users
    console.log(user1);

    const [  ,   , {userName,gender,userId} ] = users
    console.log(userName);
    console.log(gender);
    console.log(userId);
    

    
    

