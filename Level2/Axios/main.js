const form = document.getElementById("todoForm") ;
const li = document.createElement("li")
const list = document.getElementById("toDoList")
console.log(typeof(list))


function getData(){
    axios.get("https://api.vschool.io/kennysmith/todo/666b478478fe452c114be036")
    .then(response => displayTodo(response.data))
    .catch(error => console.log(error))
}
getData()


function displayTodo(todo) {
  
    for(let i = 0; i < todo.length; i++){
       

        // Declare the title,desc, img, checkbox as the html tags you want them to be.
        // Also create the buttons
        const item = todo[i]
        console.log(todo[i])
        const li = document.createElement("li")
       
       
      

       

        const title = document.createElement("h1")
        title.textContent = item.title;
        
        li.appendChild(title)
        
       const description = document.createElement("p")
       description.textContent = item.description
       li.appendChild(description);

        const price = document.createElement("p")
        price.textContent = item.price
        li.appendChild(price)
        console.log(price)

        const img = document.createElement("img");
        img.src= item.imgUrl;
        li.appendChild(img);
       
        list.appendChild(li)

        // Add event listeners before appending these to the page
     

        //
        
       
       
   axios.put(`https://api.vschool.io/kennysmith/todo/${item._id}`, {"completed":true}) 
   .then( response => console.log(response.data))
   .catch(error => console.log(error))
   
   // update for completed task will need a seperate function
   const checkbox = document.createElement("input")
   checkbox.textContent = "completed"
   // needs to be in display function
   checkbox.classList.add("completed")
   
   checkbox.type = "checkbox"
   checkbox.addEventListener("click",(e)=>{
    if(checkbox.checked === true){
        list.style.textDecoration = 'line-through';

    }else if(checkbox.checked === false){

        list.style.textDecoration = 'none';

        
    }
    
   })
  
   list.appendChild(checkbox)
   

 
   const deleteBtn = document.createElement("button");
   deleteBtn.textContent = "Delete";
   deleteBtn.addEventListener("click", () => {
       axios.delete(`https://api.vschool.io/kennysmith/todo/${item._id}`)
           .then(() => {
               list.removeChild(li); // Remove the specific li element from the list
               list.removeChild(deleteBtn)
           })
           .catch(error => console.log(error));
   });

   list.appendChild(deleteBtn);
  
}


;
}

todoForm.addEventListener("submit",(e)=>{
   e.preventDefault()
   const newTodo ={
     
   title: form.title.value,
   description: form.description.value,
   price: form.price.value,
   imgUrl: form.imageUrl.value
       
   }
   console.log(newTodo)
   axios.post("https://api.vschool.io/kennysmith/todo",newTodo)
   .then(response => displayTodo([response.data]))
  
   .catch(error => console.log(error))
 
  })
  
   




  

   


  










 

    

