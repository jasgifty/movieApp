import React, { useEffect, useState, useContext } from "react";
import axios from "../axios";
import "../styles/Row.css";
import { Link } from "react-router-dom";
import { MovieContext } from "../context";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, isLargeRow, fetchUrl }) {
  const { select } = useContext(MovieContext);
  const [selectedMovie, setSelectedMovie] = select;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  //
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <Link to="/movie">
            <div
              onClick={() => setSelectedMovie(movie)}
              className={`row__tile ${isLargeRow && "row__tileLarge"}`}
            >
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"} `}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie?.title}
              />
              <h3 className="row__tileTitle">
                {movie?.title || movie?.original_name}
              </h3>
              <div className="row__tileRating">{movie?.vote_average}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Row;
