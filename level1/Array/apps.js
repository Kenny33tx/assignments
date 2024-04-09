var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//remove last item  from vegetables array
vegetables.pop()
console.log(vegetables)

//remove first item from fruit array
fruit.shift()
console.log(fruit)

//find the index of orange
var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

//add index of orange to end of fruit array
fruit.push(1)
console.log(fruit)

// Use the length property to the length of vegetables
const length = vegetables.length
console.log(length)

//add the length to the end of the vegetable array 
vegetables.push(3)
console.log(vegetables)

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
var arrOfFruit = ['apple', 'orange', 'watermelon', 1 ]
var arrOfVegetables = [ 'carrot', 'tomato', 'pepper', 3 ]
var food = arrOfFruit.concat(arrOfVegetables)
console.log(food)

// 8. Remove 2 elements from your new array starting at index 4 with one method.
const arrOfFood = food.splice(4,2)
console.log(arrOfFood)

// 9. Reverse your array.

const reverseArr = food.reverse()
console.log(reverseArr)

//10. turn array into a string and return it 
const arrReversed = reverseArr.join("")
console.log(arrReversed)