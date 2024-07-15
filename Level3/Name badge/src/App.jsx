import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Badgeform from './Badgeform'
import Badgelist from './Badgelist'


function App() {
  const [badges,setBadges]= useState([])
function addBadge(newBadge){
setBadges([...badges,newBadge])
}

  return (
    <div>
      <Badgeform addBadge={addBadge}/>
      <Badgelist badges={badges}/>
    </div>
  )
 
}

export default App
