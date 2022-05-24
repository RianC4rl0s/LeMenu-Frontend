import axios from 'axios';
// import { parseCookies } from 'nookies';

const api = axios.create({
  baseURL: 'http://localhost:8080'
})

api.interceptors.request.use((config) => {
  // const { 'lemenu.token': token } = parseCookies();
  const { 'lemenu_token': token } = localStorage.getItem("lemenu_token");;

  if(token && config) {
    Object.assign(config.headers, {'Authorization': `Bearer ${token}`});
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;