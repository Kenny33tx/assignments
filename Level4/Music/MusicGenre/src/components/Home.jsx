import React, { useState, useContext } from "react";
import axios from "axios";
import GenreSelector from "./GenreSelector"
import { PlaylistContext } from "../context/PlaylistContext";
import YouTube from "react-youtube";
import VibeCheck from "./JournalEntry";

const YOUTUBE_API_KEY = "AIzaSyBCo3VE_vwpIMDxQXPhtVJWLLC23Q1abl0";
export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [currentSong, setCurrentSong] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [player, setPlayer] = useState(null);
  const { addSongToPlaylist, playlists } = useContext(PlaylistContext);
  const [moodJournal, setMoodJournal]=useState("")

  const handleGenreChange = (newGenre) => {
    setSelectedGenre(newGenre);
  };
// better error handling (async)
  const fetchAndPlaySong = async () => {
    setIsLoading(true);
    setErrorMessage(null);
//lets other functionality process while waiting to retrieve data (await)
    try {
      const searchResponse = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: YOUTUBE_API_KEY,
            part: "snippet",
            q: `${selectedGenre} music`,
            type: "video",
            maxResults: 100,
          },
        }
      );
      console.log(searchResponse);

      if (searchResponse.data.items && searchResponse.data.items.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * searchResponse.data.items.length
        );
        const randomItem = searchResponse.data.items[randomIndex];

        if (randomItem.id && randomItem.id.videoId) {
          const videoId = randomItem.id.videoId;

          setCurrentSong({
            title: randomItem.snippet.title,
            artist: randomItem.snippet.channelTitle,
            videoId: videoId,
          });
        } else {
          console.warn("First search result does not have a valid video ID.");
          setErrorMessage("An error occurred. Please try again.");
        }
      } else {
        console.warn("No search results found for this genre.");
        setErrorMessage(
          "No results found for this genre. Please try another one."
        );
      }
    } catch (error) {
      console.error("Error fetching or playing song:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToPlaylist = () => {
    if (currentSong) {
      if (playlists.length > 0) {
        const playlistId = playlists[0].id;
        addSongToPlaylist({...currentSong,moodJournal}, playlistId);
      } else {
        setErrorMessage("Please create a playlist first!");
      }
    }
  };
// hides video 
  const opts = {
    height: "1",
    width: "1",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const onReady = (event) => {
    console.log("Player is ready", event.target);
    setPlayer(event.target);
  };

  const onStateChange = (event) => {
    console.log("Player state changed:", event.data);
  };

  const handlePlay = () => {
    if (player) {
      player.playVideo();
    }
  };

  const handlePause = () => {
    if (player) {
      player.pauseVideo();
    }
  };

  const handleFastForward = () => {
    if (player) {
      const currentTime = player.getCurrentTime();
      player.seekTo(currentTime + 10);
    }
  };

  const handleRewind = () => {
    if (player) {
      const currentTime = player.getCurrentTime();
      player.seekTo(currentTime - 10);
    }
  };
  const handleJournal = (e)=>{
    setMoodJournal(e.target.value)
    console.log("journal saved")
  }

  return (
    <div className="App">
      <h1>Mood Journal Playlist!</h1>

      <GenreSelector
        onGenreChange={handleGenreChange}
        selectedGenre={selectedGenre}
      />

      <button onClick={fetchAndPlaySong} disabled={!selectedGenre}>
        Generate & Play Song
      </button>

      {isLoading && <p>Loading...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {currentSong && (
        <div>
          <p>
            {currentSong.title} by {currentSong.artist}
          </p>
          <YouTube
            videoId={currentSong.videoId}
            opts={opts}
            onReady={onReady}
            onStateChange={onStateChange}
          />
          <button onClick={handlePlay}>Play</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleFastForward}>Forward +10</button>
          <button onClick={handleRewind}>Back -10</button>
          
          <VibeCheck value={moodJournal} onChange={handleJournal}/>
          <button className="AddPlayBtn" onClick={handleAddToPlaylist}>Add to Playlist</button>
        </div>
      )}
    </div>
  );
}
