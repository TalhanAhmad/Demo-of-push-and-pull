function hello(){
    return "Hello, World!";
}
const func = hello();
console.log(func);

// javascript funtion === function + object

hello.myUniqueProperty = "This one is the unique property which is mentioned";
console.log(hello.myUniqueProperty);
// only function provide prototype property


if(hello.prototype){
    console.log("prototype is present");
    
}else 
{
    console.log("prototype is not present");
}
// prototype is just an simple object which is only present with function 
console.log(hello.prototype);


hello.prototype.myPrototypeProperty = "This is prototype property";
hello.prototype.anotherProperty = 42;
hello.prototype.anotherProperty2 = "fuck you";
console.log(hello.prototype.myPrototypeProperty);

// note
// proto and prototype are different things
// proto is the internal property of an object that points to its prototype
// every function provide prototype property by default
// we can add our own properties inside prototype object

