import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "a8b005586298380ef51805f0431f7f1d";

// Function to get trending movies
const getTrendingMovies = () => {
  return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};

// Function to get movies by genre ID
const getMovieByGenreId = (id) => {
  return axios.get(`${movieBaseUrl}/discover/movie?api_key=${api_key}&with_genres=${id}`);
};

export default {
  getTrendingMovies,
  getMovieByGenreId
};
