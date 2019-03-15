import axios from 'axios';

var api = axios.create({
  baseURL: "https://tweets-service.herokuapp.com/api"
});

export const getAllTweets = async (searchTerm) => {
  let response = await api.get(`/tweets?q=${searchTerm}`, {
    responseType: "json",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  });
  return response.data;
};
