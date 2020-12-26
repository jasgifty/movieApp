import React from "react";
import "../styles/Body.css";
import requests from "../requests";
import Row from "./Row";

function Body() {
  return (
    <div className="body">
      <Row
        title="Originals"
        isLargeRow={true}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <div className="body__info">
        created by-
        <a href="https://www.linkedin.com/in/jasmeet-singh-23a2301b4/">
          Jasmeet Singh
        </a>
      </div>
    </div>
  );
}

export default Body;
