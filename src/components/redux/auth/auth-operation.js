import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const register = createAsyncThunk('auth/register', async credential => {
  try {
    console.log(credential);
    const { data } = await axios.post('/users/signup', credential);
    token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    return new Error(error);
  }
});

const login = createAsyncThunk('auth/login', async credential => {
  try {
    console.log(credential);
    const { data } = await axios.post('/users/login', credential);
    token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    return new Error(error);
  }
});

const logout = createAsyncThunk('auth/logout', async credential => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

const currentUser = createAsyncThunk('auth/logout', async credential => {
  try {
    const { data } = await axios.post('/users​/current');
    console.log(data);
    token.set(data.token);
  } catch (error) {}
});

// async function postContact({ name, number }) {
//   console.log(name, number);

//   const { data } = await axios
//     .post('/contacts', {
//       name,
//       number,
//     })
//     .then(res => res)
//     .catch(err => err);

//   return data;
// }

// async function deleteContact(id) {
//   const { data } = await axios
//     .delete(`/contacts/${id}`)
//     .then(res => res)
//     .catch(err => err);
//   return data;
// }

// async function fetchContacts() {
//   const { data } = await axios.get('/contacts');

//   return data;
// }

const auth = {
  register,
  logout,
  login,
  currentUser,
};

export default auth;
