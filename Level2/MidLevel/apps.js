// save number array into a variable
const numbers = [4, 2, 7, 1, 9, 5];

// create the sort number function with a and b as perameters to mutate the numbers array in the desired order
const sorterdNumbers = numbers.sort((a,b) => a-b)
   // returning the order we want the numbers to display in this case, a before b 

console.log(sorterdNumbers) // logging the variable, sortedNumbers, our desired result to the console

// ## **Challenge 2: Mapping an Array**
// Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.

const strings =  ['hello', 'world', 'javascript'] // saved the array of strings in a variable called "strings"


// used .map to loop through the strings array and saved it in a new variable, used string as the call back,
// and returned string with the toUpperCase method turing the array's characters into all capital letters.
const uppercaseStrings = strings.map(function(string){
    return string.toUpperCase()
    
    
})
console.log(uppercaseStrings) // logged the new variable to the console which returned the array in all caps.