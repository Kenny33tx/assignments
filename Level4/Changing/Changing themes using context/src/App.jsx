import { useContext } from 'react'
import './App.css'
import Header from "./Header.jsx"
import Button from "./Button.jsx"
import {ThemeContext} from './ThemeContext.jsx'
import Nav from './Nav.jsx'
import Select from './Select.jsx'



function App(props) {
  

  return (
   <>
 <Select/>
 <Nav/>
   <Header/>
   <Button/>
   
   

   
  
   
   </>
  )
}

export default App
