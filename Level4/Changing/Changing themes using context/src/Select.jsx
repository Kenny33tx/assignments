import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Select() {
    const context = useContext(ThemeContext)
  return (
    
   <div className={`${context.color}-option`} >

<h3 className='select' > Home</h3>
<h3 className='select' > About</h3>
<h3 className='select' >Contact</h3>

</div>

    

  )
}
