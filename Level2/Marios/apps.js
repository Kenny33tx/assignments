const form = document["captured-baddies"]
form.addEventListener("submit", (e =>{
    e.preventDefault()
    // const priceButton = document.getElementById("total")
    
        const goombasCaught = form.goombas.value
        const bobombsCaught = form.bobombs.value
        const cheepcheepsCaught = form.cheepcheeps.value
    
        // let goombasPrice = document.getElementById("goomba-cost")
        // let bobombsPrice = document.getElementById("bobomb-cost")
        // let cheepcheepPrice = document.getElementById("cheepcheep-cost")
    
        // goombasPrice.form = goombaFinal;
        // bobombsPrice.form = bobomFinal;
        // cheepcheepPrice.form = cheechcheepFinal;
    
        goombaFinal = goombasCaught *5
        bobomFinal = bobombsCaught * 7
        cheepcheepFinal = cheepcheepsCaught *11
    
        let finalPrice = goombaFinal + bobomFinal + cheepcheepFinal
    
        document.getElementById("totalPrice").textContent= finalPrice
       
        // totalPrice.value = invoice
    
     
    

   
   }))

