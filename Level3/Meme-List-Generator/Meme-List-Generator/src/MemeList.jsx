import React, { useState } from 'react';

export default function MemeList({ memeList, setMemeList }) {
  const [editTopText, setEditTopText] = useState('');
  const [editBottomText, setEditBottomText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const toggleEditMode = (meme) => {
    setEditingId(meme.id);
    setEditTopText(meme.topText);
    setEditBottomText(meme.bottomText);
  };

  const saveMemeText = (id) => {
    setMemeList((prevList) =>
      prevList.map((meme) => {
        if (meme.id === id) {
          return {
            ...meme,
            topText: editTopText,
            bottomText: editBottomText
          };
        }
        return meme;
      })
    );
    setEditingId(null);
  };

  const deleteMeme = (id) => {
    setMemeList((prevList) => prevList.filter((meme) => meme.id !== id));
  };

  return (
    <div>
      {memeList.map((meme) => (
        <div key={meme.id}>
          <img src={meme.randomImage} alt="Meme" className="meme--image" />
          <h2 className="meme--textTop">
            {editingId === meme.id ? (
              <input className='edit-input'
                type='text'
                value={editTopText}
                onChange={(e) => setEditTopText(e.target.value)}
              />
            ) : (
              meme.topText
            )}
          </h2>
          <h2 className="meme--textBottom">
            {editingId === meme.id ? (
              <input className='edit-input'
                type='text'
                value={editBottomText}
                onChange={(e) => setEditBottomText(e.target.value)}
              />
            ) : (
              meme.bottomText
            )}
          </h2>

          {editingId === meme.id ? (
            <>
              <button onClick={() => saveMemeText(meme.id)} className='meme--button'>Save</button>
              <button onClick={() => setEditingId(null)} className='meme--button'>Cancel</button>
            </>
          ) : (
            <button onClick={() => toggleEditMode(meme)} className='meme--button'>Edit</button>
          )}

          <button onClick={() => deleteMeme(meme.id)} className='meme--button'>Clear</button>
        </div>
      ))}
    </div>
  );
}

