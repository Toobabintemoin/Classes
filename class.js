// // function Person(name) {
// //     this.name = name;
// //     this.greeting = function() {
// //       console.log('Hi! I\'m ' + this.name + '.');
// //     };
// //   }


// // let person1 = new Person('Bob');
// //   let person2 = new Person('Sarah');

// //   person1.name
// //   person1.greeting()
// //   person2.name
// //   person2.greeting()


// function Person(first, last, age, gender, interests) {
//     this.name = {
//        first : first,
//        last : last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//     this.bio = function() {
//       console.log(`First Name :${this.name.first}
//        Last name :${this.name.last} 
//        Age: ${this.age} 
//        Interest:  ${this.interests[0]} and ${this.interests[1]}`);
// //     };
// //     this.greeting = function() {
// //       console.log('Hi! I\'m ' + this.name.first + '.');
// //     };
// //   }
// //   let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

// // //   person1['age']
// // // person1.interests[1]
// // person1.bio()
// // person1.greeting()
// // // etc.

// class Person{
//   constructor(firstName,lastName,age,country,city){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.country = country
//     this.city = city
//     this.score = 0
//     this.skills = []
//   }
//   getFullName(){
//     const fullName = this.firstName + this.lastName
//     return fullName
//   }
//   get getScore(){
//     return this.score
//   }
//   get getSkills(){
//     return this.skills
//   }
//   set setScore(score){
//      this.score += score
//   }
//   set setSkill(skill){
//     this.skills.push(skill)
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName()
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`

//     let formattedSkills = skills ? `He knows ${skills}` :''

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//     return info
//   }
// }
// const person1 = new Person('tooba','moin',22, 'pakistan','karachi')
// const person2 = new Person('sara','ali',23, 'Turkey','istanbul')

// person1.setScore = 1
// person1.setSkill = "HTML"
// person1.setSkill = "CSS"
// person1.setSkill = "JS"

// person2.setScore = 2
// person2.setSkill = "Managing"
// person2.setSkill = "Organizing"
// person2.setSkill = "C++"

// console.log(person1.score);
// console.log(person1.skills);

// console.log(person2.score);
// console.log(person2.skills);

// console.log(person1.getFullName());

// console.log(person1.getPersonInfo())
// console.log(person2.getPersonInfo())

 class statics {
static favoriteSkill() {
  const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
  const index = Math.floor(Math.random() * skills.length)
  return skills[index]
}
static showDateTime() {
  let now = new Date()
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  let dateMonthYear = date + '.' + month + '.' + year
  let time = hours + ':' + minutes
  let fullTime = dateMonthYear + ' ' + time
  return fullTime
}
 }

console.log(statics.favoriteSkill())
console.log(statics.showDateTime())






