import React, { useContext, useState } from "react";
import { ThingContext } from "../context/ThingContext";
import UpdateForm from "./UpdateForm";

export default function Uglylist() {
  const { uglyThings, deleteThing} = useContext(ThingContext);
const [isEditing,setIsEditing]= useState(false)

// handle edit function
const editThing = (id) =>{
  setIsEditing(id)
}

function handleDelete(id) {
  deleteThing(id);
  console.log("removed");
}

  return (
    
    
    <div>
      {uglyThings.map((thing, index) => (
        <div key={thing.id || index}>
          {isEditing === thing._id ? (
            <UpdateForm thing={thing}
            setIsEditing={setIsEditing} {...thing}/>
          ) :( < >
          <h3 >{thing.title}</h3>
          <h3>{thing.description}</h3>
          <img src={thing.imgUrl}></img>
          <button onClick={()=>handleDelete(thing._id)}>delete</button>
        <button className="button" onClick={()=> editThing(thing._id)}>Edit</button>
        </>
      )}
          </div>

          
        
      ))}
    
    
  
         
     
    </div>
    
  );
}
