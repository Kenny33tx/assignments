import { useContext } from "react";
import { PlaylistContext } from "../context/PlaylistContext";

function Playlist() {
  const { setPlaylists, playlists } = useContext(PlaylistContext);

  const savedSongs = playlists.length > 0 ? playlists[0].songs : [];

  const handleDeleteSong = (songIndex) => {
    if (playlists.length > 0) {
      const updatedSongs = playlists[0].songs.filter(
        (_, index) => index !== songIndex
      );
      setPlaylists([{ ...playlists[0], songs: updatedSongs }]);
    }
  };

  return (
    <div className="playlist">
      <h2 className="journaled">Saved moods</h2>

      <ul>
        {savedSongs.map((song, index) => (
          <li className="card" key={index}>
            <a
              href={`https://www.youtube.com/watch?v=${song.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {song.title} by {song.artist}
            </a>
            {song.moodJournal && <p>mood:{song.moodJournal}</p>}
            <button className="deleteBtn" onClick={() => handleDeleteSong(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;