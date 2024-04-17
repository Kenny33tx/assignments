// submit event
//create form

const form = document["addItem"];
const div = document.getElementsByClassName("todos");
const ul = document.getElementById("list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // addItem event handler for submit event on submit
  const typedInput = document.getElementById("title").value;
  console.log(typedInput);
  const list = document.getElementById("list");
  document.addEventListener("click", addItem);

  // created elements and appended to list to display on the website
  const div = document.createElement("div");
  const ul = document.createElement("list");
  const li = document.createElement("li");
  div.appendChild(document.createTextNode(typedInput));
  ul.appendChild(li);
  li.appendChild(div);
  document.getElementById("list").appendChild(li);
  // added button to represent the edit button when clicked
  const editButton = document.createElement("button");
  editButton.textContent = "edit";

  editButton.addEventListener("click", function () {
      // If the li element is not editable, make it editable
  if (!li.contentEditable) {
    li.contentEditable = true;
  } else {
    // If the li element is editable, make it not editable
    li.contentEditable = false;
  }
  
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    // Add an event listener to the save button
saveButton.addEventListener('click', function() {
  // Get the value of the input field
  const inputValue = document.getElementById('myInput').value;

  // Create a new li element
  const newLi = document.createElement('li');
  newLi.textContent = inputValue;

  // Append the new li element to the ul element
  document.getElementById('myList').appendChild(newLi);

  // Clear the input field
  document.getElementById('myInput').value = '';
});

// Add the save button to the document
li.appendChild(saveButton);

// Create an if else statement to check if the input field is empty
if (inputValue === '') {
  // If the input field is empty, disable the save button
  saveButton.disabled = true;
} else {
  // If the input field is not empty, enable the save button
  saveButton.disabled = false;
}
   
  });

  // added deleteBtn to store delete button, inserted adjacent to make it a sibling element to remove the list item
  //after submission
  const deleteBtn = document.createElement("button");
  deleteBtn.name = "removeItem";
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", function () {
    li.remove();
    deleteBtn.remove();
    editButton.remove();
    console.log(div);
  });
  li.append( editButton);
  li.append(deleteBtn);
});




