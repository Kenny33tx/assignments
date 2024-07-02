// ----- Part 1: GET (Display Todos) ---------------------------------------
// Get a reference to the todo list element
const list = document.getElementById("toDoList")
const form = document.getElementById("todoForm")

// Function to fetch todo data from the API and create the list
function getData(){
    axios.get("https://api.vschool.io/kennysmith/todo")
    .then(response => displayTodo(response.data))
    .catch(error => console.log(error))
}
getData()

function displayTodo(todo) {
 
    for(let i = 0; i < todo.length; i++){
       
        const item = todo[i]
        console.log(item)
        const li = document.createElement("li")
       
       const checkbox = document.createElement("input")
       checkbox.classList.add("complete")
       checkbox.type ="checkbox";
       list.appendChild(checkbox);
      

       

        const title = document.createElement("h1")
        title.textContent = item.title;
        
        li.appendChild(title)
        
       const description = document.createElement("p")
       description.textContent = item.description
       li.appendChild(description);

        const price = document.createElement("p")
        price.textContent = item.price
        li.appendChild(price)

        const img = document.createElement("img");
        img.src= item.imgUrl;
        li.appendChild(img);
       
        list.appendChild(li)

        // Add event listeners before appending these to the page
     

        //
        const div = document.getElementsByClassName("mainList")
       
       
       
    }
 
    todoForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        const newTodo ={
          
        title: form.title,
        description: form.description,
        Price: form.Price,
        imgUrl: form.imgUrl
            
        }
        axios.post("https://api.vschool.io/kennysmith/todo", newTodo)
        .then(response => console.log(response.data))
       
        .catch(error => console.log(error))
       }) 
 ;
}