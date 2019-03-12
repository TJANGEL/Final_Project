import axios from "axios";

export default {
  getTitles: () => {
    return axios.get("/api/titles");
  },
  searchTitles: title => {
    return axios.post("/search", { title: title });
  },
  addTitleToDB: titleData => {
    return axios.post("/api/titles", titleData);
  },
  deleteTitle: id => {
    return axios.delete(`/api/titles/${id}`);
  }
};
