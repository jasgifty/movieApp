import React, { useContext } from "react";
import { MovieContext } from "../context";
import "../styles/MovieTile.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function MovieTile({ movie }) {
  const { like } = useContext(MovieContext);
  const [likedMovies, setLikedMovies] = like;

  const handleClick = () => {
    const index = likedMovies.findIndex((mov) => mov === movie);

    let newLikedlist = [...likedMovies];
    if (index >= 0) {
      newLikedlist.splice(index, 1);
    } else {
      console.log("cant remove movie");
    }
    setLikedMovies([...newLikedlist]);
  };
  return (
    <div className="movieTile">
      <img
        className="movieTile__image"
        src={base_url + movie?.poster_path}
        alt=""
      />
      <div className="movieTile__data">
        <div className="movieTile__title">
          {movie?.title || movie?.original_name}
        </div>
        <div className="movieTile__date">{movie?.release_date}</div>
        <div className="movieTile__rating">{movie?.vote_average}</div>
        <button className="movieTile__button" onClick={handleClick}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default MovieTile;
