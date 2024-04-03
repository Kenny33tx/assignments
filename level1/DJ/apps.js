const square = document.querySelector("#square")
console.log("square")

square.addEventListener("mouseover", function(e){
    square.style.backgroundColor = "blue";
})

square.addEventListener("mousedown", function(e){
    square.style.backgroundColor = "red";
})

square.addEventListener("mouseup", function(e){
    square.style.backgroundColor = "yellow";
})

square.addEventListener("dblclick", function(e){
    square.style.backgroundColor = "green";
})

square.addEventListener("wheel", function(e){
    square.style.backgroundColor = "orange";

})



square.addEventListener("keypress", function(e) {
    pressedKey(e) 

      if(e.key === "b"){square.style.backgroundColor = "blue"}
      else if(e.key === "r"){square.style.backgroundColor = "red"}
      else if(e.key === "y"){square.style.backgroundColor = "yellow"}
      else if(e.key === "g"){square.style.backgroundColor = "green"}
  }

)
    