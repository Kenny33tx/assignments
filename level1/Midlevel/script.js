// Function to change text content of an HTML element by ID
function changeTextContent(header, newText) {
    const h1 = document.getElementById(header);
    const p = document.getElementById("para")
    if (p) {
        p.textContent = newText;
    } else {
        console.log("Element with ID '" + elementId + "' not found.");
    } if (h1){
        h1.textContent = newText;
    }
}

// Test the function with different element IDs and new text content
changeTextContent('heading', 'Welcome to my website!');
changeTextContent('paragraph', 'This is a sample paragraph.');

// Event listener for button click to change text content
var changeButton = document.getElementById('changeButton');

if (changeButton) {
    changeButton.addEventListener('click', function() {
        changeTextContent('heading', 'This is my website!');
        changeTextContent('paragraph', 'Hello, Sun!');
    });
} else {
    console.log("Button with ID 'changeButton' not found.");
}


 
