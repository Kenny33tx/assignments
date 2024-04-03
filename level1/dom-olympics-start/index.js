/*created h1 element,saved it to the variable of header. grabbed the text content of the newly created element 
and used the querySelector method to reference the header from the css, saving it to a variable named "main"
*/
const header = document.createElement("h1")
header.textContent = "JavaScript Made This!!";
const main = document.querySelector("#header")
//appended header to main so the textContent will show up on the page. then styled and centered it using the created element
main.append(header)
header.style.textAlign = "center"
header.style.fontSize = "20px"
//created second header, appended to first header to produce  message ("kenny wrote the java script")
const header2 = document.createElement("h2")
header2.textContent = "Kenny wrote the JavaScript "
header.append(header2)
header2.style.fontSize = "15px" 
// created span element to wrap and isolate first word of text content and give it a different style than the rest of the sentence
const spanElement = document.createElement("span")
spanElement.textContent = "Kenny"
spanElement.style.color = "blue"
/*saved the textContent in the variable, attaching it to the  2nd header and used the replace() method to replace the value of the string(kenny) in the 2nd header
the span element(kenny) was called using the insertBefore method to insert a new child to the header2 in front of the firstChild node
*/
const textContent = header2.textContent.replace("Kenny","")
header2.innerHTML = textContent ;
header2.insertBefore(spanElement, header2.firstChild);

//SILVER CHALLENGE//
/*
used the querySelector method to call back the messages on the web page and saved it in the div variable.
Gave messages on the left 2 id's identified in the div element, used the textContent method to change the text in the original html, then used the prepend method to appear in the 
proper order on the page in front of the left div element. 

*/
const div = document.querySelector("#messages")
const divLeft = document.getElementById("left")
const divLeft2 = document.getElementById("left2")
divLeft.textContent = "I have something of slight importance needing to be discussed "
divLeft2.textContent = "You will fall into a deep trance with one gaze at my shiny police badge"
const divRight = document.getElementById("right")
const divRight2 = document.getElementById("right2")
divRight.textContent = "I wish not to engage in shenanigans, I have farming to tend to"
divRight2.textContent = "I'm a simple farmer, ooo shiny badge"

div.prepend(divLeft)
div.prepend(divRight)

//CLEAR BUTTON, FUNCTION//
/*
Used the preventDefault funtion to prevent the submit action from refreshing the web page when the event is fired
called the elementId(clear-button), used an event listener click event and attached a value of an empty string to the input field
 in order to clear the input when the event is fired

*/
const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
})


document.getElementById('clear-button').addEventListener("click", function(){
    document.getElementById('input').value = "";
    })
    




