import { APIKEY } from "./apikey";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}`,
  fetchNetflixOriginals: `/discover/movie?api_key=${APIKEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
};

export default requests;
