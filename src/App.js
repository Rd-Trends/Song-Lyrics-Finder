import React, { useState, useEffect } from "react";
import Lyrics from "./Lyrics";
import Header from "./Header";
import "./App.css";

const App = () => {
  const [lyrics, setLyrics] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState([]);

  useEffect(() => {
    getLyrics();
  }, [query]);

  const getLyrics = async () => {
    const response = await fetch(`https://api.lyrics.ovh/v1/${query}`);
    const data = await response.json();
    console.log(data.lyrics);
    setLyrics(data.lyrics);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <Header className="header" />
      <div className="wrapper">
        <div className="form-field">
          <form className="search-form" onSubmit={getSearch}>
            <input
              type="text"
              placeholder="Artist/Song Title"
              className="search-input"
              value={search}
              onChange={updateSearch}
            />
            <button type="submit" className="search-btn">
              search
            </button>
          </form>
        </div>
        <div className="lyrics">
          <Lyrics title={query} key={query} lyrics={lyrics} />
        </div>
      </div>
      <footer>
        <p>&copy;RD_Tech</p>
      </footer>
    </div>
  );
};

export default App;
