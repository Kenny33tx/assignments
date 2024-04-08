// stored a variable of various office items and called it officeItemArr



/*created a for loop using the officeItems variable and initiliazed the iterated count through the loop with the length property.
iterate the count of computers with stored count variable.
create if statement to identify the number of times computer returns true. return the count.
*/
const officeItemsArr = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];

//create an object and store the word count 

let wordCount = 0;
// utilized forEach method to iterate through items in array list
// officeItemsArr.forEach(computer => {
//     if(computer === "computer") {
//         wordCount++ ;
//     }
// });
for (var i = 0; i < officeItemsArr.length; i++) {
    if(officeItemsArr[i] === 'computer'){
        wordCount++
    }
}
console.log(wordCount)
    

    





