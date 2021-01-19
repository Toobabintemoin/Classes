//  Q: Create a Dog and Cat Child class from the Animal class? And override the method that created in Animal class ? 


class Animal{
    constructor(name,age,color,leg){
        this.name = name
        this.age = age
        this.color = color
        this.leg = leg
    }

    get getName(){
        return `Name : ${this.name}`
    }
    get getAge(){
        return `Age : ${this.age}`
    }
    get getColor(){
        return `Color : ${this.color}`
    }
    get getLeg(){
        return `Leg : ${this.leg}`
    }
    set setName(name){
        this.name = name
    }
    set setAge(age){
        this.age = age
    }
    set setColor(color){
        this.color = color
    }
    set setLeg(leg){
       this.leg = leg
    }
    getInstant(){
        return `Name : ${this.name} Age : ${this.age} Color:  ${this.color} leg : ${this.leg}`
    }
}

class Dog extends Animal{
    constructor(name,age,color,leg,eye){
    super(name,age,color,leg)
    this.eye = eye 
    
}
    getInstant(){
        return `Name : ${this.name} Age : ${this.age} Color:  ${this.color} leg : ${this.leg} ${this.eye}`
    }

}

class Cat extends Dog{
    constructor(name,age,color,leg,eye){
        super(name,age,color,leg,eye)
    }
    getInstant(){
        return `Name : ${this.name} , Age : ${this.age} ,Color:  ${this.color}, leg : ${this.leg}  , Eyes : ${this.eye}`
    }
}

let animal =  new Animal('elephent',1, 'grey', 4)
let dog =  new Dog ('Dog', '2 years', 'black', 4 , 'two')
let cat =  new Cat ('cat', '1 years', 'white', 4 , 'two')

console.log(animal);
console.log(animal.getName);
console.log(animal.getAge);
console.log(animal.getColor);
console.log(animal.getLeg);
console.log(`${animal.setName = 'panda'}`);
console.log(animal.getInstant()); 

console.log(dog);
console.log(dog.setName = 'panda');

console.log(cat);
console.log(cat.getInstant());
console.log(cat.getName);