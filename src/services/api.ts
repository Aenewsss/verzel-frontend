import axios from 'axios';
const Api = axios.create({baseURL: process.env.API_URL || 'http://localhost:2002'});
console.log(process.env.API_URL)
export default Api;