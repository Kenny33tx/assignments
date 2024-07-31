import React, { useEffect, useState } from 'react'

import { v4 as uuidv4 } from "uuid";


export default function MemeForm({meme,setMemes, memes,setMeme, setMemeList}) {
 
   
    function handleChange(e){
        const {name,value} = e.target
        setMeme((preveMeme)=>({
            ...preveMeme,
            [name]: value 
        }))
    }

    function addMemeToList() {
        const newMeme = {
          ...meme,
          id: uuidv4()
        };
    
         setMemeList((prevList) => [...prevList, newMeme])

         setMeme({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
        });
    }
    
      
    function handleSubmit(e){
        e.preventDefault()
        addMemeToList()
        console.log("meme generated")
       
        setMeme({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",  
        });
      
    }

    function getMemeImage() {
       
        
        const randomIndex = Math.floor(Math.random() * memes.length);
        const url = memes[randomIndex].url
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage:url
        }));

    }


   
    
    
   
    
    
  return (
    <div>
   <form className='form' onSubmit={handleSubmit}> 
       <input className='form--input'
        type='text'
        placeholder='topText'
       onChange={handleChange}
       name='topText'
       value={meme.topText}>
      
       </input>

       <input className='form--input'
       type='text'
       placeholder='bottomText'
       onChange={handleChange}
       name='bottomText'
       value={meme.bottomText}>
        
       </input>
      

{/* <button className="meme--button" onClick={addMemeToList}>
          Add to list
        </button> */}
         
         </form>

       <div className='meme'>
       
       <h2 className='meme--textTop'>{meme.topText}</h2>
       <h2 className='meme--textBottom'>{meme.bottomText}</h2>
       <img src={meme.randomImage} className='meme--image' />
       </div>
       <button onClick={addMemeToList} className='meme--button'>Add</button>

       <button onClick={getMemeImage} 
       className='meme--button'>New Meme Alert!</button>
       
       </div>
  
  )
}
