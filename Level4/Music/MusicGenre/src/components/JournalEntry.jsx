import React, {useState}from 'react'



export default function VibeCheck({value,onChange}) {
 
 const [moodEntry,setMoodEntry]=useState(value)
 const handleEntry= (e)=>{
  setMoodEntry(e.target.value) 
  onChange(e)
 }

  return (
    <>
    <h1>mood jounal</h1>
   <form > 
    <textarea className='journalForm'
    value={moodEntry}
    onChange={handleEntry}
    ></textarea>
   
   </form>
   </>
  )
}
