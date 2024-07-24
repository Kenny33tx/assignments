import React, { useState } from 'react';


export default function MemeList({ meme, setMeme, memeList,setMemeList }) {

 

  function deleteMeme(id) {
    setMemeList((prevList) => prevList.filter((m) => m.id !== id));
  }

  function toggleEditMode(id) {
    setMemeList((prevList) =>
      prevList.map((m) => {
        if (m.id === id) {
          return { ...m, editing: !m.editing };
        }
        return m;
      })
    );
  }

  function saveMemeText(id) {
    setMemeList((prevList) =>
      prevList.map((m) => {
        if (m.id === id) {
          return {
            ...m,
            editing: false,
            topText: meme.topText,
            bottomText: meme.bottomText,
          };
        }
        return m;
      })
    );
  }

  return (
    <>
    <div>
      {memeList.map((meme) => (
        <div key={meme.id}>
          <img src={meme.randomImage} alt="Meme" className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      ))}
    </div>
  
     
        <button onClick={()=> deleteMeme (meme.id)} className='meme--button'>clear</button>
      
      <button onClick={()=> toggleEditMode(meme.id)} className='meme--button'>Edit</button>
      <button onClick={()=> saveMemeText(meme.id)} className='meme--button'>Save Meme</button>
    </>
  )
}

