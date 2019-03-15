import axios from 'axios';

var api = axios.create({
  baseURL: "http://localhost:3000/api"
});

export const getAllTweets = async (searchTerm) => {
  let response = await api.get(`/tweets?q=${searchTerm}`, {
    responseType: "json",
    retry: 3,
    retryDelay: 1000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  });
  return response.data;
};
