function extractUniqueCharacters(strings) {
    const uniqueChars = new Set();//initialize empty set; Set(), store in variable called unique characters

    for (const str of strings) { // for loop looping through each string in the array
        for (const char of str) { // for each string, loop through each character
            uniqueChars.add(char);// add characters to the empty set so only unique characters are stored
        }
    }

    return Array.from(uniqueChars);

}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars)


//challenge 2 Sort by property: 
// function sortByProperty(objects, propertyName){
//     return  objects.sort((a,b )=>a[propertyName] - b[propertyName])

// }



// const people= [
//     {name:"Alice", age:30},
//     {name:"Bob", age:25},
//     {name:"Charlie", age:35},
//     {name:"David", age:28},
// ]

// const sortedByAge = sortByProperty(people,'age');//arguments for function
// console.log(sortedByAge)


function sortByProperty(objects, propertyName){
    // return  objects.sort((a,b )=>a[propertyName] - b[propertyName])
    const sorted =  objects.sort((a,b )=>a[propertyName] - b[propertyName])
    return sorted
}




const people= [
    {name:"Alice", age:30},
    {name:"Bob", age:25},
    {name:"Charlie", age:35},
    {name:"David", age:28},
]

const sortedByAge = sortByProperty(people,'age');//arguments for function
console.log(sortedByAge)






