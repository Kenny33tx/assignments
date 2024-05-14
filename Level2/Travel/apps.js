const form = document["my-form"];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Function to gather form data and display in an alert
    function travelForm() {
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const age = form.age.value;
        const gender = form.gender.value;
        const diet = form.diet.value;
        const destination = form.destination.value;
        
        const message = `First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nDiet: ${diet}\nDestination: ${destination}`;
        
        alert(message);
        
        // Reset form fields
        form.firstName.value = "";
        form.lastName.value = "";
        form.age.value = "";
        form.gender.value = "male"; // Assuming 'male' is the default value
        form.diet.value = "";
        form.destination.value = "none"; // Assuming 'none' is the default value
    }

    // Call the function to gather form data and display in an alert
    travelForm();
});
