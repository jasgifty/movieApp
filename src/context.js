import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [likedMovies, setLikedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  return (
    <MovieContext.Provider
      value={{
        like: [likedMovies, setLikedMovies],
        select: [selectedMovie, setSelectedMovie],
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
