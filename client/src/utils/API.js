import axios from "axios";

export default {
  loadAllMovies: () => {
    return axios.get("/movies/loadAllMovies");
  },
  getMovies: () => {
    return axios.get("/movies/findAllMovies");
  },
  loadLatestMovies: () => {
    return axios.get("/movies/loadLatest");
  },
  findTitleByGenre: genre => {
    return axios.get(`/movies/${genre}`);
  },
  login: user => {
    return axios.post("/user/login", user);
  },
  register: user => {
    return axios.post("user/register", user);
  }
};
