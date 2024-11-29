import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = error.response?.data?.message || error.message;
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error('Bad request');
          break;
        case 401:
          console.error('Unauthorized');
          break;
        case 403:
          console.error('Forbidden');
          break;
        case 404:
          console.error('Not found');
          break;
        case 500:
          console.error('Internal server error');
          break;
        default:
          console.error(errorMessage);
          break;
      }
    } else {
      console.error('Network error', errorMessage);
    }

    return Promise.reject(error);
  },
);
