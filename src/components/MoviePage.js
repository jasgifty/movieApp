import React, { useContext } from "react";
import "../styles/MoviePage.css";
import { MovieContext } from "../context";

const base_url = "https://image.tmdb.org/t/p/original/";

function MoviePage() {
  const { like, select } = useContext(MovieContext);
  const [likedMovies, setLikedMovies] = like;
  const [selectedMovie, setSelectedMovie] = select;

  const handleAdd = () => {
    const index = likedMovies.findIndex((mov) => mov === selectedMovie);
    console.log(index);
    if (index === -1) {
      setLikedMovies((prev) => [...prev, selectedMovie]);
      console.log(likedMovies);
    }
  };

  return (
    <div className="moviePage">
      <img
        className="moviePage__image"
        src={`${base_url}${selectedMovie?.backdrop_path}`}
        alt={selectedMovie?.title || selectedMovie?.original_name}
      />
      <div className="moviePage__data">
        <div className="moviePage__title">
          {selectedMovie?.title || selectedMovie?.original_name}
        </div>
        <div className="movePage__des">{selectedMovie?.overview}</div>
        <div className="movePage__rating">
          Rating: ⭐{selectedMovie?.vote_average}
        </div>
        <div className="movePage__language">
          language: {selectedMovie?.original_language}
        </div>
        <div className="movePage__popularity">
          Popularity: {selectedMovie?.popularity}
        </div>
        <button onClick={handleAdd} className="moviepage__buton">
          Add to liked
        </button>
      </div>
    </div>
  );
}

export default MoviePage;
