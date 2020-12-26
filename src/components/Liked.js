import React, { useState, useContext, useEffect } from "react";
import MovieTile from "./MovieTile";
import { MovieContext } from "../context";
import "../styles/Liked.css";

function Liked() {
  const { like } = useContext(MovieContext);
  const [likedMovies, setLikedMovies] = like;
  const [size, setSize] = useState(likedMovies.length);

  useEffect(() => {
    setSize(likedMovies.length);
  }, [likedMovies.length]);

  return (
    <div className="liked">
      <h2>Liked</h2>
      <div className="liked__items">
        {size ? (
          likedMovies.map((movie) => <MovieTile movie={movie} />)
        ) : (
          <p>add something to the liked list</p>
        )}
      </div>
    </div>
  );
}

export default Liked;
