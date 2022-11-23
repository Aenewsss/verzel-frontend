import axios from 'axios';

const Api = axios.create({ baseURL: process.env.API_URL || 'https://verzel-backend.herokuapp.com' });
export default Api;