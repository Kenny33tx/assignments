// // use form model
// const form = document.myForm;

// // submit event
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
  

//     // Create variables for first name and last name from form inputs
//     const firstName = form.firstName.value;
//     const lastName = form.lastName.value;

//     form.firstName.value = "";
//     form.lastName.value = "";

//     // Create an <h1> element
//     const h1 = document.createElement("h1");

//     // Set the text content of the <h1> element to the concatenated first name and last name
//     h1.textContent = firstName + " " + lastName;

//     // Append the <h1> element to the body
//     document.body.appendChild(h1);
// });


//web storag

// local storage- Persists on page refresh and closing of the browser
// session storage - Does not persist on refresh or closing of the browser, both are saved as JSON in the broswer


// Setter- Save data in local storage(key = value pairs)
// localStorage.setItem("friends",JSON.stringify(["mark","tina","jay",]))
// localStorage.setItem("address", JSON.stringify({street: "123 street", city: "SLC"}))

// // Getter
// const friends = JSON.parse(localStorage.getItem("friends"))
// console.log(friends)

// const address = JSON.parse(localStorage.getItem("address"))
// console.log(address)

// setTimeout(function(){
//     console.log("hello!");
// },10000);

// setInterval(function(){
//     console.log("hello!");
// }, 1000);

// var intervalID = setInterval(function(){
//     console.log("hello!");
// },2000);
// clearInterval(intervalID)

// function sayHello(){
//     console.log("hello")
// }
// function stopSayingHello(){
//     clearInterval(intervalID);
// }
// var intervalID = setInterval(sayHello,1000);
// setTimeout(stopSayingHello, 6000)

// higher order functions 

function doMath(num1, num2, callback){
return callback(num1, num2)

}

// function multiply(num1, num2 ){
//     return  num1 * num2
// }
// function divide(num1, num2){
//     return num1 / num2
// }
// console.log (doMath(360,4, divide))
// console.log (doMath(500,365, multiply))

// Higher order array methods
//  .map() - sets up a for loop for us, inside the function is the array[i]



// const result = arr.map(function(dou){
// return num + 10
// })



// # .sort()
// Returns: The array sorted but sort also mutates the original array, so capturing the returned value is not necessary.
// Purpose: To sort an unsorted array of items.

const arr = [34,6,22,1,6,44,3,64,234,5]

// .sort()
arr.sort((a,b) => a - b)
console.log(arr)

