const readline = require("readline-sync");

const playerName = readline.question("Hello! What is your name?");

console.log(`welcome ${playerName} to Survive the Lagoon `)


let isGameRunning = true;//boolean
class Character { //constuctor function
    constructor(name, technique, stamina, attackPoints, inventory) {
        this.name = name;
        this.technique = technique;
        this.stamina = stamina;
        this.attackPoints = attackPoints;
        this.inventory = inventory;

    };
    checkInventory() { //check's for Hero or ememy inventory

       
        this.inventory = inventory
       console.log('checked',  this.inventory );
   }
    }

    let inventory = ["flash fins", "stamina boost snorkle","smart goggles"]; //Hero's inventory saved to a variable

    const Hero = new Character(playerName,"killstroke", 100, 10,inventory);
    const shark = new Character("Simon", "massive chop", 20, 5, ["Double edged tooth", "swift fin"] )
    const squid = new Character("Thrash","Smash and Thrash", 20, 15,["Ink bottle","Jelly jar"])
    const orca = new Character("Tiny","Juggle launch",30, 20,["Magic skin","Water canon"])

    let enemies = [shark, squid, orca];// instantiad enemies

    const randomize = (min,max) =>{
        return Math.floor(Math.random()*(max-min + 1)+ min);
    };

    while(isGameRunning) {
        const nextMove = readline.question("What is your next move? Press [s] to swim, [c] to check your inventory, [q] to quit", {limit:["s","c","q" ]}

        ); 
        // console.log(nextMove)
        if (nextMove === "s"){
            console.log("Our hero continues to swim")
            
            let enemyEncounter = randomize(1,4)
            console.log(enemyEncounter)

            if(enemyEncounter === 2) {
                let randomEnemyIndex = randomize(0, enemies.length -1)// checks for length of enemy array and generates random enemy when the number lands on 2
                let currentEnemy = enemies[randomEnemyIndex]
                console.log(`${currentEnemy.name} has appeared!`)
               
                const options = ["fight", "swim away"];

                let fightOrSwimAway = readline.keyInSelect(options, "do you want to fight or swim away?");

if(options[fightOrSwimAway] === "fight"){// if else statement for fight or run option 
    fight(currentEnemy);
} else if (options[fightOrSwimAway] === "swim away") {
    swimAway(currentEnemy);
}

            }

        } else if(nextMove === "c"){
            Hero.checkInventory()
        } else if (nextMove === "q") {
          isGameRunning = false;// game stops running after q for quit is selected

        };

    };

    
   
    function fight(currentEnemy) {//while loop that runs the fight scenerion of the game 
         console.log(`You chose to fight ${currentEnemy.name} !`);
        while(Hero.stamina > 0 && currentEnemy.stamina > 0) {
            currentEnemy.stamina -= Hero.attackPoints
            console.log(`You delivered ${Hero.attackPoints} damage! ${currentEnemy.name} is reduced to ${currentEnemy.stamina}`

            );
            Hero.stamina -= currentEnemy.attackPoints
            console.log(`${currentEnemy.name} delivered ${currentEnemy.attackPoints} damage ${Hero.name} is reduced to ${Hero.stamina}`

            );
            if(Hero.stamina <= 0){
                console.log(`${Hero.name} has met their demise!`)
                isGameRunning = false;
               
        
            } 
            if(currentEnemy.stamina <= 0) {
                console.log(`${Hero.name} is victorious`);
                const droppedItemIndex = randomize(0, currentEnemy.inventory.length -0);
                const droppedItem = currentEnemy.inventory[droppedItemIndex];
                console.log(`${currentEnemy.name} dropped ${droppedItem}`);
                if(currentEnemy.stamina <=0){
                    console.log(`${Hero.name} picked up ${droppedItem}`);
                };
    
            };
           

        };

    };

function swimAway(currentEnemy) {
    // console.log(`You escaped the grips of ${currentEnemy.name}!`);
    let escapeChance = randomize(1,2);
    if(escapeChance === 1) {
        console.log(`${Hero.name} escaped the grips and lived to fight another day!`);

    }else if(escapeChance === 2) {
        console.log(`You got caught in ${currentEnemy.name} 's trap! Get back in the fight`);
    };
    fight(currentEnemy);   
}



