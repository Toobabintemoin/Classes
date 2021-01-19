// Q: Create an Animal class.The class will have name, age,color,legs properties and create different methods?

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

let animal =  new Animal('elephent',1, 'grey', 4)


console.log(animal);
console.log(animal.getName);
console.log(animal.getAge);
console.log(animal.getColor);
console.log(animal.getLeg);
console.log(`${animal.setName = 'panda'}`);
console.log(animal.getInstant());