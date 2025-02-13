import axios from 'axios';
import getAccessToken from '../helpers/get-access-token';
import { defaultResponseInterceptor } from './interceptor';

const defaultAxios = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'App-Key': process.env.NEXT_PUBLIC_APP_KEY ?? '',
  },
});

// Add a request interceptor to append the token
defaultAxios.interceptors.request.use(
  async (config) => {
    if (typeof window !== "undefined") {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = `JWT ${token}`;
      }
    }
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
    defaultResponseInterceptor(error);
    return Promise.reject(error);
  }
);

export default defaultAxios;