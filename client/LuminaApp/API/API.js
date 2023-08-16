import axios from 'axios';

//must change depending on location, using ipv4 of the wifi
const API_BASE_URL = 'http://10.187.152.121:19000';

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
