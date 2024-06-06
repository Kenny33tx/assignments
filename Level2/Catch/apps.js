// try {

//     if(2 === 2){
//         ("Hey, I am an error")
//     }
// console.log("Did I console.log?")


// }
// catch(err){
//     console.log(err)
// }
// finally{
//     console.log("I am running no matter what!")
// }

// function sum (num1,num2){
//     return num1 + num2
    
// }
// let result = sum(1,4)
// console.log(result)


// try{
//     if(!result === 3 ){
//         throw new Error (" You have the correct answer ")

//     }
//     console.log("That math doesn't math!")
        
// }
// catch(err){
//     console.log(err)
// }
// finally{
//     console.log("I always work!")
// }



var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  return username + password

}
let credentials = login( )
console.log(credentials)



try{
    if( user=== "sam" && user === "abc123")

        throw new Error ("username or password does not match")

console.log("log in successful")


}
catch(err){
    console.log(err)
}
finally {
    console.log("enter user name and password")
}






