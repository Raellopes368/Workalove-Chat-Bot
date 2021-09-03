import axios from 'axios';

const api = axios.create({
  baseURL: 'https://61327054ab7b1e001799b4d8.mockapi.io'
});

export default api;
