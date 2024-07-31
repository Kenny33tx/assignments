import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Nav() {
    const context = useContext(ThemeContext)
   
  return (
    
    <nav >
       <select onChange={context.selectTheme} className={`${context.color}-option`}>
      <option>Home</option>  
      <option>About</option>  
      <option>Contact</option>  
     
        

       </select>
       
    </nav>
       
    
  )
}
