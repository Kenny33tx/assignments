// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const fiveAndGreater = [3,6,8,2]

const greaterNumber = fiveAndGreater.filter(num => num >= 5)
console.log(greaterNumber)

//2) Given an array of numbers, return a new array that only includes the even numbers.

const arr = [3,6,8,2]

const evensOnly = arr.filter(even => even % 2 === 0)
console.log(evensOnly)

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
const words = ["dog", "wolf", "by", "family", "eaten", "camping"]


const fiveCharactersOrLess = words.filter(word => word.length <= 5)
console.log(fiveCharactersOrLess)

//4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const membersOnly = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const peopleWhoBelongToTheIlluminati = membersOnly.filter(member => member.member === true)
console.log(peopleWhoBelongToTheIlluminati)

//5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const ofAge = people.filter(person => person.age >= 18)
console.log(ofAge)