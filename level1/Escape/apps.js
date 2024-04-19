const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log(`welcome ${name} to the escape room `)


let gameOn = true;
let hasKey = false;

const options = ["Open the door", "Put your hand in the hole", "Find the key"]

while (gameOn) {
    let choice = readline.keyInSelect(options, "What do you want to do ?")
    console.log(`You chose to ${options[choice]}`)

    if (choice === 0) { //open the door
        if(hasKey === true){
            console.log("You win")
            gameOn = false
        } else if (hasKey === false){
            console.log("You must first find the key")
        }
    }


    if (choice === 1) { //hand in the hole
         console.log("That was dumb, you died")
         gameOn = false
    }

    if (choice === 2) { //find the key
         hasKey = true;
         console.log("Hey look! You found the key, try the door now")
    }

}




