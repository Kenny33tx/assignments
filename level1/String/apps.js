/*Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
function capitalizeAndLowerCase( hello) {
    var greeting = ("hello")
var lowerCaseGreeting = ("HELLO")

   

 var newGreeting = greeting.toUpperCase() + lowerCaseGreeting.toLowerCase()
console.log(newGreeting)
}
return capitalizeAndLowerCase()

*/

/*Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
function findMiddleIndex (hello) {
    hello.length/2
    const result = Math.floor(2.5)
    console.log(result)
    }
  

return findMiddleIndex("hello")
*/

/* apply same method for 'hello world'
function findMiddleIndex (helloWorld) {
   const hello = helloWorld.length/2
    const result = Math.floor(5)
    console.log(result)
}
return findMiddleIndex("helloWorld")
*/

/*Write a function that uses slice() and the other functions you've written to return the first half of the given string.
function returnFirstHalf (Hello) {
const greeting = Hello
const firstHalf = greeting.slice(0,2)
console.log(firstHalf)
}
return returnFirstHalf("Hello")
*/

/*function returnFirstHalf (helloWorld) {
    const greeting = helloWorld
    const firstHalf = greeting.slice(0,5)
    console.log(firstHalf)
    }
    return returnFirstHalf("hello World")
    */

    /*Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
    function capilizeAndLowercase(HellO) {
        const Hello = "Hello"
        const capital = HellO.slice(0,2).toUpperCase()
        const lowerCase = HellO.slice(2).toLowerCase()
        const capitalAndLowercase = capital + "" + lowerCase
        console.log(capitalAndLowercase)
 
    }
    return capilizeAndLowercase("HellO")
    */

    // Write same function for "Hello World"
    function capilizeAndLowercase(HelloWorld) {
        const greeting =  HelloWorld.length/2
      const result = Math.floor(5)
        //console.log(result)
        const Hello ="Hello"
        const World = "World"
        const greet = Hello.slice(0,5).toUpperCase()
       // console.log(greet)
       const earth = World.slice(0,5).toLowerCase()
      // console.log(earth)
      const newGreeting = greet + " " + earth
      console.log (newGreeting)
    }
return capilizeAndLowercase("HelloWorld")