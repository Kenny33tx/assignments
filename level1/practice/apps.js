//methods under the hood

// const numArray = [34,6,22,1,6,44,3,64,234,5]

// numArray.sort(function(num1,num2){
    // return num1-num2  
// })
// console.log(numArray)

// const numArray = [34,6,22,1,6,44,3,64,234,5]

// for(let i = 0; i < numArray.length; i++){
    // for(let j = 0; j < numArray.length - 1; j++){
        // if(numArray[j] > numArray[j + 1]) {
            // const temp = numArray[j];
            // numArray[j] = numArray[j + 1];
            // numArray[j = 1] = temp;
        // }
    // }
// }
// console.log(numArray)

// const people = [ "john", "JACOB", "jingleHeimer", "schmidt"];
// const upperCaseFirst = people.map(function(name){
    // return name[0].toUpperCase() + name.slice(1).toLowerCase();
    // upperCaseFirst.push(capitalized);
// })
// console.log(upperCaseFirst)

// filter method
// const stringArray = ["dog", "wolf", "by", "family", "eaten", "camping",];

// const fiveLettersOrLess = stringArray.filter(function(word){
    // if(word.length <= 5)
        // return true 
// })
// console.log(fiveLettersOrLess)

// REDUCE METHOD: Tun on an array of voter objects into a count of how many people voted

var voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false},

]

// const voteCount = voters.reduce(function(final, voter) {
    // if(voter.voted){
        // final++
    // }
    // return final
// }, 0)

// console.log(voteCount)

// EXERCISE 1
// const numbers = [ 3, 6, 8 , 11, 5, 9]
// Filter  out even numbers: [3,11,5,9]
//  Double each remaining number: [6, 22, 10, 18]

// const results = numbers.filter (num => num % 2 !==0).map( num => num * 2)
// console.log(results)

// const words = ["apple", "banana", "orange", "kiwi", "grape"];
// filter string with more than 5 characters
//  Calculate the total lengthof remaining strings: 19

// const fiveLettersOrMore = words.filter(function(fruit){
    // if(fruit.length > 5)
        // return true
// })

// console.log(fiveLettersOrMore)


// while loop example
// let count = 1;
// while (count <= 5) {
    // console.log("current count",count);
    // count++;
// }

// const numbers = [1,3,5,7,8,10];
// let foundEvenNumber = false;
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0) {
//         console.log(" first number found", numbers[i])
//         foundEvenNumber = true;
//         break;
//     }
// }
// if(!foundEvenNumber){
//     console.log("no even numbers found.");
// }

// same problem as above using a while loop
// const numbers = [1,3,5,7,8,10];
// let foundEvenNumber = false;
// let i = 0

// while( i <numbers.length){
//    if(numbers[i] % 2 === 0){
//     console.log("first even number found", numbers[i])
//     foundEvenNumber = true;
//     break;
//    }
//    i++;
// }

// if(!foundEvenNumber){
//     console.log('no even numbers found');
// }

