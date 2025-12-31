class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }   

speak(){
    return `${this.name} is speaking`
}
isAge(){
    return `${this.age}`
}
isSupercute(){
    if (this.age < 3){
        return `${this.name} is super cute`
    }

    return `${this.name} is not super cute`
}
}
 const animal1 = new animal("tommy",2);
 console.log(animal1);
console.log( animal1.speak());
console.log( animal1.isAge());
console.log( animal1.isSupercute());

 
