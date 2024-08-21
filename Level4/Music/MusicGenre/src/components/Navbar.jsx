// import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
   <nav className='navBar'> 
    <Link to ="/"><button className="button">Home</button></Link>
    <Link to="/playlist"><button className="button">Playlist</button></Link>
    <Link to="/about"><button className="button">About</button></Link>
   </nav>
  )
}
