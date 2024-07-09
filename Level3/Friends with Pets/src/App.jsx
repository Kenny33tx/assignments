import { useState } from 'react'

import './App.css'

import Pets from './Pets.jsx'
import friendsData from './friendsData.js'

const Pet = ({ name, breed }) => (
  <div className="pet">
    <p>Pet Name: {name}</p>
    <p>Breed: {breed}</p>
    
  </div>
);

const Friend = ({ name, age, pets }) => (
<div className="Friend">
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <h3>Pets:</h3>
    {pets.map((pet, index) => (
      <Pet key={index} {...pet} />
    ))}
  </div>
);


const FriendList = () => (
  <div>
    <h1 className="title">Friends with Pets</h1>
    {friendsData.map((friend, index) => (
      <Friend key={index} {...friend} />
    ))}
  </div>
);

function App() {

  // const friendElements =friendsData.map((friend,index) =>{
  //   return <Friends name={friendsData.name}
  //  age={friendsData.age}/>
  //  })
  




return (
  <div>
   
<FriendList/>


  </div>

)
}

export default App
