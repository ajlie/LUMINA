import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.2:8081';

export const registerUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Axios error:', error.message);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Axios error:', error.message);
  }
};
