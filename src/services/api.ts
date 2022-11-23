import axios from 'axios';

const Api = axios.create({ baseURL: process.env.API_URL || 'http://18.230.130.179:2002' });
export default Api;