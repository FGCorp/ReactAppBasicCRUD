import axios from 'axios';

const fetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

fetch.interceptors.request.use(
  config => {
    return config; // TODO: add authentication token
  },
  error => Promise.reject(error)
);

fetch.interceptors.response.use(({ data }) => {
  return data;
}, error => Promise.reject(error));

export { fetch };
