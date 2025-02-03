import axios from 'axios';

// Set the base URL for all API calls
const BASE_URL = 'https://frontend-take-home-service.fetch.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Sends/receives cookies
});

// Authentication
export const login = async (name, email) => {
  return axiosInstance.post('/auth/login', { name, email });
};

export const logout = async () => {
  return axiosInstance.post('/auth/logout');
};

// Dog endpoints
export const getBreeds = async () => {
  const response = await axiosInstance.get('/dogs/breeds');
  return response.data; // returns an array of breed names
};

export const searchDogs = async (params) => {
  // params is an object that may contain: breeds, size, from, sort, etc.
  const response = await axiosInstance.get('/dogs/search', { params });
  return response.data; // contains resultIds, total, next, prev, etc.
};

export const fetchDogs = async (dogIds) => {
  // dogIds: array of dog ID strings
  const response = await axiosInstance.post('/dogs', dogIds);
  return response.data; // returns an array of Dog objects
};

export const matchDogs = async (favoriteIds) => {
  const response = await axiosInstance.post('/dogs/match', favoriteIds);
  return response.data; // returns { match: string }
};

