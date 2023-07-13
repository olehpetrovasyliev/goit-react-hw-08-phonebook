import axios from 'axios';

const mainApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
//contacts
export const apiGet = () => mainApi.get('/contacts');
export const apiAdd = user => mainApi.post('/contacts', user);
export const apiDel = id => mainApi.delete(`/contacts/${id}`);

// users
export const signUpAPI = user => mainApi.post('/users/signup', user);
export const logInAPI = user => mainApi.post('/users/login', user);
export const logOutAPI = user => mainApi.post('/users/logout', user);
export const currentUserAPI = user => mainApi.get('/users/current', user);

export const setToken = token => {
  mainApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  mainApi.defaults.headers.common.Authorization = '';
};
