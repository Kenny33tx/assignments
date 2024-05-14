// use form model
const form = document.myForm;

// submit event
form.addEventListener("submit", function(event) {
    event.preventDefault();
  

    // Create variables for first name and last name from form inputs
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;

    form.firstName.value = "";
    form.lastName.value = "";

    // Create an <h1> element
    const h1 = document.createElement("h1");

    // Set the text content of the <h1> element to the concatenated first name and last name
    h1.textContent = firstName + " " + lastName;

    // Append the <h1> element to the body
    document.body.appendChild(h1);
});
