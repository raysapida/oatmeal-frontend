import axios from 'axios';

var api = axios.create({
  baseURL: "http://localhost:3000/api"
});

export const getAllTweets = async () => {
  let response = await api.get("/tweets", {
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
