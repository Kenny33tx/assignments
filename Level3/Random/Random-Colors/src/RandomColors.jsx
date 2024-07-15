import React, {useState,useEffect}  from 'react'
import axios from 'axios'


export default function RandomColors() {
   
    const [randomColors, setRandomColors]=useState("#ffffff")
    const getRandomColor=()=>{
        axios.get(`https://random-color.onrender.com/colors/random `)
        .then((res) => {
        //   const randomColorIndex = Math.floor(Math.random() * res.data.length);
          const colorHex = res.data.hex;
          setRandomColors(colorHex); // Update the separate state
          console.log(randomColors)
        })
        .catch((err) => {
          console.log("An error occurred:", err);
        });
        
    };
        useEffect(()=>{
            getRandomColor()
        }, [])
       
    
    
  
  return (
    <div style={{backgroundColor:randomColors, height:"100vh",width:"100vw"}} > 
        
  <button onClick={getRandomColor}>Randomize</button>
   
    </div>
  
  )
}
