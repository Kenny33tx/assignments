import { useState,useEffect } from 'react'
import MemeForm from './MemeForm'
import MemeList from './MemeList';
import Header from "./components/Header"
import axios from "axios"

import './App.css'

function App() {
const [memes,setMemes]=useState([])

const [meme, setMeme] = useState({
  topText: "",
  bottomText: "",
  randomImage: "http://i.imgflip.com/1bij.jpg",
});
const [memeList, setMemeList] = useState([]);




useEffect(()=>{
  axios.get("https://api.imgflip.com/get_memes")
  .then(res =>setMemes(res.data.data.memes))
 
  
  .catch(err => console.log(err))
},[])
  return (
    <div>
       <Header/>
       <MemeList meme={meme} setMemes={setMemes} memeList={memeList} setMemeList={setMemeList}  />
      <MemeForm meme={meme} setMeme={setMeme} memes={memes} setMemeList={setMemeList} />
      
    </div>
  )
}

export default App
