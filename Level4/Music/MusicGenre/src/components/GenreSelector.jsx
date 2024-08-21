import React, { useState } from 'react'

export default function GenreSelector({selectedGenre, onGenreChange}) {
    const [genres, setGenres]=useState([
        "80s rock",
        "90's pop",
        "2000's R&B",
        "Songs to run to",
        "Country",
        "blue grass",
        "hip hop",
        "study music",
        "edm",
        "fall music",
        "christmas music",
        "acoustic"

    ]);

    const handleSelectChange = (e) => {
      onGenreChange(e.target.value);
    };
  return (
    <div>
        <select
        id="genreSelect"
        value={selectedGenre} 
        onChange={handleSelectChange}
        >
          <option value=""></option>
          {genres.map((genre) => (
          <option key={genre} value={genre}>
            {" "}
            {genre}
          </option>
        ))}
        

        </select>

    </div>
  )
}
