import axios from 'axios';

export const api = await axios.create({
  baseURL: 'http://localhost:3333',
});
