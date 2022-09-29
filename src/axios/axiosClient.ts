import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://fruitmarkettest.herokuapp.com',
});
