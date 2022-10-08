import axios from 'axios';

const AXIOS = axios.create({
  baseURL: 'https://634045ece44b83bc73cd38a2.mockapi.io/api/v1/',
});

function fetchContacts() {
  return AXIOS.get('contacts').then(res => res.data);
}

function FeatchSearchMovies(query) {
  return AXIOS.get(`search/movie?query=${query}&page=1`).then(res => res.data);
}
function FeatchMovieDetails(movieId) {
  return AXIOS.get(`movie/${movieId}?`).then(res => res.data);
}
function FeatchCast(movieId) {
  return AXIOS.get(`movie/${movieId}/credits?`).then(res => res.data);
}
function FeatchReviews(movieId) {
  return AXIOS.get(`movie/${movieId}/reviews?`);
}

function FeatchVideo(movieId) {
  return AXIOS.get(`movie/${movieId}/videos?`);
}
export {
  fetchContacts,
  FeatchSearchMovies,
  FeatchMovieDetails,
  FeatchCast,
  FeatchReviews,
  FeatchVideo,
};
