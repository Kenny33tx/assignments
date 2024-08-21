import React,{useState,useContext} from 'react'
import { ThingContext } from '../context/ThingContext'


export default function UpdateForm({thing}) {
    
    const {updatedThing} = useContext(ThingContext)

    const [editData, setEditData]= useState({
      title: thing.title,
      description: thing.description,
      imgUrl: thing.imgUrl
    })
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
     
      
  const submitEdit = (e)=>{
    e.preventDefault()
   
    updatedThing(thing._id,editData);
     
  

  }


  return (
    <form onSubmit={submitEdit}> 
        <input 
        type='text'
        name='title'
        value={editData.title}
        placeholder='Title'
        onChange={handleChange}
        ></input>
        <input 
        type='text'
        name='description'
        value={editData.description}
        onChange={handleChange}
        placeholder='Description'
        ></input>
        <input
         type='url'
         name='imgUrl'
         value={editData.imgUrl}
         placeholder='Image Url'
         onChange={handleChange}
        ></input>
<button className='button'>Save</button>

    </form>

  )

}