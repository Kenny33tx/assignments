// Make an array of numbers that are doubles of the firs array
const arr = [2,5,100]

const result = arr.map(function(doubleNumbers){
    return doubleNumbers * 2
})
console.log(result)

// 2) take an array of numbers and make them a string
const numString = arr.map(function(stringItUp){
    return stringItUp.toString()
})
console.log(numString)
  
  
  

// Capitalize the first letter of each name and make the rest of the charcters lowercase
const nameArr = ["john", "JACOB", "jinGleHeimer", "schmidt"]


function capitalizeNames(name){
  // your code here
  
const upperFirstLetter = nameArr.map(function(name){
    return name[0].toUpperCase() + name.slice(1).toLocaleLowerCase()
})
console.log(upperFirstLetter)
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

// 4. Make an array of the strings of the names 
const namesOnly = [ 
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
const people = namesOnly.map(function(person){
    return person.name
})
console.log(people)

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

const makeStrings = ([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])

const matrix = makeStrings.map(person  => person)
 

matrix.map((person) => {
if(person.age >= 18){
console.log(`${person.name} can watch the Matrix.`)
} else console.log (`${person.name} is under age!!`)
})


// 6.Make an array of the names in h1s and the arrays in h2s
// function readyToPutInTheDom(){
// const h1 = document.createElement("h1")
// const h2 = document.createElement("h2")
// const people = makeStrings.map(person => person)
// const ages = makeStrings.map(age => age)
// console.log(h1.people)
// console.log(h2.ages)
// }

  
function readyToPutInTheDom(array) {
    const newArr = array.map(function(person) {
        return `<h1>${person.name}</h1><h2>${person.age}<h2>`
    })
    return newArr
}

console.log(readyToPutInTheDom(namesOnly))