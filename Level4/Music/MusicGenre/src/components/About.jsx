import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1 className="aboutSection">About the Mood Journal Playlist</h1>
        <p className="about">
            In today's fast pace society where hundreds if not thousands of decisions are made, The mood Journal Playlist 
            provides a way to put the busy mind at ease.
            From "songs to run to", to "christmas music", and a wide variety of genre's your imagination can conjure, all you have to do is 
            sit back and press play, and let your mind wonder. Like the memory you created? save it for later along with your added song to your
            playlist. 
        </p>
    </div>
  )
} 