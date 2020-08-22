import React from "react";
import "./App.css";

const Lyrics = ({ title, lyrics }) => {
  return (
    <div className="lyrics-card">
      <h1>{title}</h1>
      <p>{lyrics}</p>
    </div>
  );
};

export default Lyrics;
