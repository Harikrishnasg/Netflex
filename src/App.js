import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Search.svg";
import MovieCard from "./components/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  const movie = async (title) => {
    const options = {
      method: "GET",
      url: `http://www.omdbapi.com/?i=tt3896198&apikey=aaa65f6b&s=${title}`,
    };
    const response = await axios(options);

    setMovies(response.data.Search);
  };

  useEffect(() => {
    movie("superman");
  }, []);

  return (
    <div className="app">
      <h1>NetFlex</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <img src={Search} alt="search" onClick={() => movie(title)} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
