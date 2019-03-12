import axios from "axios";

export default {
  // getTitles: () => {
  //   return axios.get("/api/titles");
  // },
  // searchTitles: title => {
  //   return axios.post("/search", { title: title });
  // },
  // addTitleToDB: bookData => {
  //   return axios.post("/api/titles", bookData);
  // },
  // deleteTitle: id => {
  //   return axios.delete(`/api/titles/${id}`);
  // },
  loadAllMovies: () => {
    return axios.get("/movies/loadAllMovies");
  },
  getMovies: () => {
    return axios.get("/movies/findAllMovies");
  },
  loadLatestMovies: () => {
    return axios.get("/movies/loadLatest");
  }
};
