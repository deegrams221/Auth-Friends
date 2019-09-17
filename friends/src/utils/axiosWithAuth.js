// import axios and create a module that creates a new instance of the axios object: baseURL, headers with object -> auth header with the token

import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {Authorization: token}
  });
};