import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Playlist from './components/Playlist'
import About from './components/About'



function App() {


  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path="/playlist" element={<Playlist />} />
 <Route path='/about' element={<About/>}/>
  </Routes>

  </BrowserRouter>

  </>
  )
}

export default App
