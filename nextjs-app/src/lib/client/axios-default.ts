import axios from 'axios';
import getAccessToken from '../helpers/get-access-token';

const defaultAxios = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authentication': 'JWT ' + getAccessToken(),
    'App-Key': process.env.NEXT_PUBLIC_APP_KEY ?? '',
  },
});

// Add a request interceptor
defaultAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
defaultAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default defaultAxios;